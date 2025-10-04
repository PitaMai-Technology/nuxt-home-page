// 基本のナビゲーションアイテム型
interface NavigationItem {
  title: string
  path?: string
  icon?: string
  target?: string
  children?: NavigationItem[]
}

// UNavigationMenu用の型（必要最小限）
type NavigationLink = {
  label: string
  to?: string
  icon?: string
  target?: string
  children?: Array<{
    label: string
    to?: string
    description: string
    icon?: string
  }>
}

// 外部リンク型（UNavigationMenuの仕様に準拠）
type ExternalLink = NavigationLink

export const useNavigation = (filter?: string[], externalLinks?: ExternalLink[]) => {
  const { data: navigation } = useAsyncData('navigation', () => {
    return queryCollectionNavigation('content')
  })

  const navigationItems = computed((): NavigationLink[] => {
    if (!navigation.value) return []
    
    // フィルター処理
    let items = navigation.value
    if (filter?.length) {
      items = items.filter((item: NavigationItem) => 
        item.title && filter.includes(item.title)
      )
      if (!items.length) return []
    }
    
    // 変換処理
    const converted = items.map((item: NavigationItem) => ({
      label: item.title,
      ...(item.path && { to: item.path }),
      ...(item.icon && { icon: item.icon }),
      ...(item.target === '_blank' && { target: '_blank' }),
      ...(item.children && {
        children: item.children.map(child => ({
          label: child.title,
          ...(child.path && { to: child.path }),
          description: child.title,
          ...(child.icon && { icon: child.icon })
        }))
      })
    }))

    // 外部リンクを追加
    return externalLinks ? [...converted, ...externalLinks] : converted
  })

  return { navigation, navigationItems }
}