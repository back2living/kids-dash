import {NextRequest, NextResponse} from "next/server";

const middleware = (req: NextRequest, res: NextResponse) => {
    const path = req.nextUrl.pathname;
    const isVerified = req.cookies.get("pgKidCurrentUser");
    const isPublicPath = path === "/signin" || path === "/forgot-password";

    if (isPublicPath && isVerified) {
        return NextResponse.redirect(process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_URL! : "http://localhost:3001");
    }

    if (!isPublicPath && !isVerified) {
        return NextResponse.redirect(new URL("/signin", req.nextUrl));
    }
}

export default middleware;

export const config = {
    matcher: ["/signin", "/forgot-password", "/checklists", "/storefront", "/tasks", "/kids", "/kids/:id", "/settings", "/kids/:id/do-cards-goals", "/kids/:id/do-cards-penalties", "/kids/:id/issue-do-cards", "/kids/:id/purchased-items", "/kids/:id/tasks", "/dashboard"],
}