// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.
import type { App } from 'vue'

const modules = import.meta.glob('@/components/_base-*.vue', { eager: true })

export default function loadComponents(app: App<Element>) {
  for (const path in modules) {
    const componentName = path.match(/_base-([\w-]+)\.vue$/)?.[1] || ''
    app.component(`Base${componentName}`, (modules[path] as any).default)
  }
}
