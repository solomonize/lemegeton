import { siteConfig } from "@/config/site"

import { ExternalLink } from "./ui/external-link"

export function AboutMore() {
  const mailTo = `mailto:${siteConfig.email}?subject=안녕하세요, 선우님`

  return (
    <section className="mt-16 sm:mt-32">
      <h3 className="mb-5 block font-medium text-gray-1100 sm:mb-4">더보기</h3>
      <p className="break-keep text-gray-1000">
        저에 대해 궁금한 점이 있으시다면{" "}
        <ExternalLink href={mailTo}>Email</ExternalLink>로 언제든지 연락주시면
        감사드리겠습니다.
      </p>
    </section>
  )
}
