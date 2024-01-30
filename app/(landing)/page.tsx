import { Button } from "@/components/ui/button";
import Link from "next/link";

const LandingPage =() => {
    return (
        <div>
            Landing Page (Unprotected)
            <div>
                <Link href="/sign-in">
                    <Button>
                        ログイン
                    </Button>
                </Link>
                <Link href="/sign-up">
                    <Button>
                        登録
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;