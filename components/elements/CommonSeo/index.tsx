import { DefaultSeo, NextSeo } from "next-seo";

export function CommonSeo() {
  const CommonSeoData = {
    keywords: ``,
    additionalLinkTags: [
      {
        rel: "icon",
        href: ""
      },
      {
        rel: "apple-touch-icon",
        href: "",
        sizes: "76x76"
      },
      {
        rel: "apple-touch-icon",
        href: "",
        sizes: "120x120"
      }
    ],
    additionalMetaTags: [
      {
        name: "application-name",
        content: ""
      },
      {
        name: "msapplication-tooltip",
        content: "설레임"
      },
      {
        name: "viewport",
        content:
          "width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0,viewport-fit=cover"
      }
    ],

    twitter: {
      handle: "@handle",
      site: "",
      cardType: "summary_large_image"
    }
  };
  return <DefaultSeo {...CommonSeoData} />;
}

export function IndexSeo() {
  const indexSeoData = {
    canonical: "",
    title: "설레임 ",
    description: "",

    openGraph: {
      type: "website",
      title: "설레임",
      description: `.`,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...indexSeoData} />;
}

export function OneDaySeo() {
  const aboutSeoData = {
    canonical: "",
    title: "",
    description: "",

    openGraph: {
      type: "website",
      title: "",
      description: ``,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...aboutSeoData} />;
}

export function VodSeo() {
  const CounsellingSeoData = {
    canonical: "https://www.cultureplace.co.kr/vodmain",
    title: "언제 어디서나 만나는 VOD - 설레임 ",
    description:
      "언제 어디서나 편리하게 VOD, 실시간 스트리밍 서비스로 즐기세요",

    openGraph: {
      type: "website",
      title: "언제 어디서나 만나는 VOD - 설레임",
      description: `언제 어디서나 편리하게 VOD, 실시간 스트리밍 서비스로 즐기세요`,
      url: "https://www.cultureplace.co.kr/vodmain",
      images: [
        {
          url: "https://www.cultureplace.co.kr/images/mo_mainvis0.jpg",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...CounsellingSeoData} />;
}

export function NewsSeo() {
  const NoticeSeoData = {
    canonical: "https://www.cultureplace.co.kr/notice",
    title: "새로운 소식과 이야기 - 설레임 ",
    description: "",

    openGraph: {
      type: "website",
      title: "새로운 소식과 이야기",
      description: ``,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...NoticeSeoData} />;
}

export function RegisterSeo() {
  const RegisterSeoData = {
    canonical: "",
    title: "",
    description: "당신이 행복해지는 곳. 가입을 축하드립니다.",
    openGraph: {
      type: "website",
      title: "",
      description: ``,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...RegisterSeoData} />;
}

export function SignInSeo() {
  const SignInSeoData = {
    canonical: "https://www.cultureplace.co.kr/signin",
    title: "설레임 로그인",
    description:
      "설레임에 오신 것을 환영합니다. 최선을 위한 혁신과 최상의 서비스를 제공하고 있습니다.",
    openGraph: {
      type: "website",
      title: "설레임 로그인",
      description: `설레임에 오신 것을 환영합니다.  최선을 위한 혁신과 최상의 서비스를 제공하고 있습니다.`,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...SignInSeoData} />;
}

export function PaymentSeo() {
  const PaymentSeoData = {
    canonical: "",
    title: "설레임 결제",
    description: "",

    openGraph: {
      type: "website",
      title: "설레임 결제",
      description: ``,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PaymentSeoData} />;
}

export function PaymentCompleteSeo() {
  const PaymentCompleteSeoData = {
    canonical: "",
    title: "결제완료 ",
    description: "설레임 프로그램을 선택해주셔서 감사합니다. ",

    openGraph: {
      type: "website",
      title: "결제완료",
      description: ``,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PaymentCompleteSeoData} />;
}

export function YakwanSeo() {
  const YakwanSeoData = {
    canonical: "",
    title: "약관 - 설레임 ",
    description: "설레임 약관",
    openGraph: {
      type: "website",
      title: "설레임",
      description: `설레임 약관`,
      url: "",
      images: [
        {
          url: "/images/mo_mainvis0.jpg",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function PolicySeo() {
  const PolicySeoData = {
    canonical: "",
    title: "개인정보처리방침 - 설레임",
    description: "설레임",
    openGraph: {
      type: "website",
      title: "개인정보처리방침 - 설레임",
      description: `설레임 개인정보처리방침`,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PolicySeoData} />;
}

export function MypageSeo() {
  const YakwanSeoData = {
    canonical: "",
    title: "마이페이지 - 설레임",
    description: "신청한 클래스, 찜한 클래스, 주문내역에 대해 알려드립니다.",
    openGraph: {
      type: "website",
      title: "마이페이지 - 설레임",
      description: `신청한 클래스, 찜한 클래스, 주문내역에 대해 알려드립니다.`,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...YakwanSeoData} />;
}

export function GenreSeo({ url, text }: { url: string; text: string }) {
  const PolicySeoData = {
    canonical: ``,
    title: `${text}`,
    description: `${text}`,
    openGraph: {
      type: "website",
      title: `${text}`,
      description: `${text}`,
      url: `/${url}`,
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PolicySeoData} />;
}

export function DetailSeo({
  _id,
  imgurl,
  title
}: {
  _id: string;
  imgurl: string;
  title: string;
}) {
  const PolicySeoData = {
    canonical: `/view/${_id}`,
    title: `${title} - 설레임`,
    description: `${title} 에 대한 상세 정보입니다.`,
    openGraph: {
      type: "website",
      title: `${title}`,
      description: `${title} 에 대한 상세 정보입니다.`,
      url: `/view/${_id}`,
      images: [
        {
          url: `${imgurl}`,
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PolicySeoData} />;
}

export function SearchSeo({ keyword }: { keyword: string }) {
  const PolicySeoData = {
    canonical: `${keyword}`,
    title: `"${keyword}" 검색결과`,
    description: "검색하신 결과를 알려드립니다.",
    openGraph: {
      type: "website",
      title: `"${keyword}" 검색결과`,
      description: `검색하신 결과를 알려드립니다.`,
      url: "",
      images: [
        {
          url: "",
          width: 1200,
          height: 630,
          alt: "설레임 대표이미지"
        }
      ],
      site_name: "설레임"
    }
  };
  return <NextSeo {...PolicySeoData} />;
}
