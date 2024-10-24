import './bootstrap';
// spell-checker: disable
import '../css/app.css';
import { createInertiaApp } from '@inertiajs/react'
// spell-checker: enable
import { createRoot } from 'react-dom/client'
import Layouts from '@/Layouts/Layouts';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    let page = pages[`./Pages/${name}.jsx`]
    page.default.layout = page.default.layout || ((page) => <Layouts children={page} />);
    return page
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)
  },
  progress : {
    color: '#000',
    showSpinner: true,
  }
})
