import Link from "next/link";

export const workdatas = [
    {
        slug: "work1",
        status: true,
        title: "ポートフォリオサイト",
        tools: ["Next.js","React","Framer Motion","Tailwind CSS"],
        image: "/workimages/pf-site.jpg",
        gitUrl: "https://github.com/mh429/moe-pf",
        vercelUrl: "https://moe-pf.vercel.app/",
        description: ["ポートフォリオサイトをNext.jsで作成しました。","CSSはTailwindで記述し、アニメーションライブラリはMotionを使用しました。","簡潔に見て頂けるよう、スッキリしたレイアウトを心がけました。"]
    },
    {
        slug: "work2",
        status: true,
        title: "ねこゲーム",
        tools: ["JavaScript"],
        image: "/workimages/neko-game.jpg",
        gitUrl: "https://github.com/mh429/neko-game",
        vercelUrl: "https://neko-game-azure.vercel.app/",
        description: ["JavaScriptの練習で、PCサイズのゲームを作成しました。","エラーチェックや時間の制御を工夫したり、ロジックを考えるのが面白かったです。","猫のイラストはCanvaAIで生成しました。"]
    },
    {
        slug: "work3",
        status: true,
        title: "Simple Closet",
        tools: ["Next.js","React","Supabase","WeatherAPI","PWA"],
        image: "/workimages/sc.jpg",
        gitUrl: "https://github.com/mh429/simple-closet",
        DocumentUrl: "https://www.canva.com/design/DAHC2bORpB0/Yv5ygY2IEOLhuFH-DwP1mA/view?utm_content=DAHC2bORpB0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hec0a81720c",
        vercelUrl: "https://simple-closet.vercel.app/",
        description: ["Next.jsとSupabaseを使用して、シンプルで操作性の良いクローゼットアプリを制作しました。","「ファッション好きではないが、毎日ベストな服装で過ごしたい人」をターゲットとし、多機能すぎず丁度良く管理できるアプリを目指しました。","---------------------------------------------","【デモ用アカウント】","ID：demo@demo.com","パスワード：portfolio2026"]
    },
    {
        slug: "work4",
        status: true,
        title: "MINI WALLET Lab",
        tools: ["Python","Flask","Blueprint","MySQL","XAMPP",],
        image: "/workimages/mw-lab.jpg",
        gitUrl: "https://github.com/mh429/mini-wallet-lab",
        vercelUrl: "https://mini-wallet-lab.onrender.com/",
        description: ["PythonとMySQLで、ECサイトのPCサイズデモを制作しました。","簡易的なもので改善余地も多いですが、ユーザ側の商品購入機能と、店舗側の管理者機能を実装しています。","※Render無料枠でのデプロイのため、起動まで1分ほどかかります","---------------------------------------------","【デモ用アカウント】","ユーザID：demo@demo.com","管理者ID：staff@demo.com","パスワード（共通）：portfolio2026"],
    },
    // {
    //     slug: "work5",
    //     status: true,
    //     title: "Work Sample⑤",
    //     tools: ["","","","",],
    //     image: "/workimages/no-image.svg",
    //     gitUrl: "",
    //     vercelUrl: "",
    //     description: ["","","","",],
    // },
]
