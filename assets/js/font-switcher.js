(_ => {
  const onloadHandler = _ => {
    const defaultFont = 'lora'
    const searchParams = new URLSearchParams(window.location.search)

    if (searchParams.has('font')) {
      const bodyClassList = document.body.classList;
      const font = searchParams.get('font');
      const fontSwitcher = document.querySelector('.font-switcher')
      const SwitcherClassList = fontSwitcher.classList;

      SwitcherClassList.remove(font)
      SwitcherClassList.add(defaultFont)

      fontSwitcher.value = ''
      fontSwitcher.innerText = 'Regular Edition'

      bodyClassList.add(font)
      bodyClassList.remove(defaultFont)

      document.querySelectorAll('a[href]').forEach(link => {
        if (link.href.toLowerCase().includes('gunk') && ! link.href.includes(`font=${font}`)) {
          link.href += `?font=${font}`
        }
      })
    }
  }

  if (document.readyState === "complete" || document.readyState === "interactive" || document.readyState === "loaded") {
    onloadHandler()
  } else {
    window.addEventListener("DOMContentLoaded", onloadHandler);
  }
})();
