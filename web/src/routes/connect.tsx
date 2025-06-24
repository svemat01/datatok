import { Link, useRouter, createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

export const Route = createFileRoute("/connect")({
	component: Connect,
});

function Connect() {
	const { setIsLoggedIn } = useAuth();
	const router = useRouter();

	const handleProceed = () => {
		setIsLoggedIn(true);
		router.navigate({ to: "/dashboard" });
	};

	return (
		<div className="container mx-auto mt-10 max-w-2xl text-center">
			<h1 className="text-3xl font-bold">Connecting to TikTok</h1>
			<div className="mt-6 rounded-lg border bg-card p-6 text-left text-card-foreground">
				<p className="mb-4">
					To use DataTok, you'll be redirected to TikTok to authorize our
					application. We will request the following data:
				</p>
				<ul className="mb-4 list-disc space-y-2 pl-6">
					<li>
						<strong>Basic Profile Information:</strong> Your TikTok Open ID,
						display name, and avatar. This helps us identify your account and
						personalize your DataTok experience.
					</li>
					<li>
						<strong>TikTok Activity History (Data Portability API):</strong>{" "}
						This includes all videos you have <em>liked</em> and{" "}
						<em>bookmarked</em>, as well as your general activity history. This
						data is essential for DataTok to archive your content.
					</li>
				</ul>
				<p>
					<strong>Purpose:</strong> We use this data exclusively to
					automatically archive your chosen TikTok content and provide you with
					a personal, accessible record of your activity.
				</p>
			</div>
			<div className="mt-8 flex justify-center gap-4">
				<Button onClick={handleProceed}>Proceed to TikTok</Button>
				<Button variant="outline" asChild>
					<Link to="/">Go Back</Link>
				</Button>
			</div>
		</div>
	);
}
