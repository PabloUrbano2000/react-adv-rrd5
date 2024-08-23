type JSXComponent = () => JSX.Element

interface Route {
  path: string
  Component: JSXComponent | React.LazyExoticComponent<JSXComponent>
  name: string
  children?: Route[]
}

export const routes: Route[] = []
