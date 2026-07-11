import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import type { Locale } from '@/data/insights'

// Renders an article's Markdown body with brand styling. GFM enables tables.
// Internal links (starting with "/") are locale-prefixed; external links open
// in a new tab.
export function ArticleBody({
  markdown,
  locale,
}: {
  markdown: string
  locale: Locale
}) {
  return (
    <div className="space-y-5">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children }) => (
            <h2 className="pt-6 text-xl font-semibold tracking-tight text-navy-900 sm:text-2xl">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="pt-2 text-lg font-semibold text-navy-900">{children}</h3>
          ),
          p: ({ children }) => (
            <p className="text-base leading-relaxed text-navy-800">{children}</p>
          ),
          a: ({ href, children }) => {
            const url = href ?? '#'
            if (url.startsWith('/')) {
              return (
                <a
                  href={`/${locale}${url}`}
                  className="font-medium text-navy-700 underline decoration-navy-300 underline-offset-2 hover:text-navy-900"
                >
                  {children}
                </a>
              )
            }
            return (
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-navy-700 underline decoration-navy-300 underline-offset-2 hover:text-navy-900"
              >
                {children}
              </a>
            )
          },
          ul: ({ children }) => (
            <ul className="ml-1 space-y-2">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="ml-1 list-none space-y-3 [counter-reset:step]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="flex gap-2.5 text-base leading-relaxed text-navy-800">
              <span className="mt-2.5 size-1.5 shrink-0 rounded-full bg-navy-400" />
              <span className="flex-1">{children}</span>
            </li>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-navy-900">{children}</strong>
          ),
          em: ({ children }) => <em className="italic">{children}</em>,
          img: ({ src, alt }) =>
            typeof src === 'string' ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt={alt ?? ''}
                loading="lazy"
                className="my-8 w-full rounded-2xl border border-navy-100"
              />
            ) : null,
          table: ({ children }) => (
            <div className="my-6 overflow-x-auto rounded-2xl border border-navy-100">
              <table className="w-full border-collapse text-sm">{children}</table>
            </div>
          ),
          thead: ({ children }) => (
            <thead className="bg-navy-50 text-left">{children}</thead>
          ),
          th: ({ children }) => (
            <th className="border-b border-navy-100 p-3 align-top font-semibold text-navy-900">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border-b border-navy-100 p-3 align-top text-navy-800">
              {children}
            </td>
          ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}
