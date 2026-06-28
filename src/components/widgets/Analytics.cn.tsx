// Baidu Tongji (百度统计). Wired only when region === 'cn'.
// Drop NEXT_PUBLIC_BAIDU_TONGJI_ID into env when ready.
import Script from 'next/script'

export function AnalyticsCn() {
  const id = process.env.NEXT_PUBLIC_BAIDU_TONGJI_ID
  if (!id) return null
  return (
    <Script id="baidu-tongji" strategy="afterInteractive">
      {`var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?${id}";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s);})();`}
    </Script>
  )
}
