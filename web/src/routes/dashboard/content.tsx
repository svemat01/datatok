import { createFileRoute } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, Bookmark, Play, ExternalLink, Calendar } from "lucide-react";

const MOCK_ARCHIVED_VIDEOS = Array.from({ length: 8 }, (_, i) => ({
	id: `VID-${i + 1}`,
	title: `Amazing TikTok Video ${i + 1}`,
	creator: `@creator${i + 1}`,
	dateLiked: `2024-10-${20 - i}`,
	thumbnailUrl: `https://picsum.photos/seed/${i + 1}/400/600`,
	duration: `${Math.floor(Math.random() * 60) + 15}s`,
	views: `${Math.floor(Math.random() * 900) + 100}K`,
}));

const MOCK_BOOKMARKED_VIDEOS = Array.from({ length: 6 }, (_, i) => ({
	id: `BOOK-${i + 1}`,
	title: `Bookmarked Content ${i + 1}`,
	creator: `@bookmarker${i + 1}`,
	dateBookmarked: `2024-10-${25 - i}`,
	thumbnailUrl: `https://picsum.photos/seed/book${i + 1}/400/600`,
	duration: `${Math.floor(Math.random() * 120) + 30}s`,
	views: `${Math.floor(Math.random() * 500) + 50}K`,
}));

function VideoCard({
	video,
	type,
}: {
	video: any;
	type: "liked" | "bookmarked";
}) {
	const dateLabel = type === "liked" ? "Liked on" : "Bookmarked on";
	const dateValue = type === "liked" ? video.dateLiked : video.dateBookmarked;
	const icon = type === "liked" ? Heart : Bookmark;
	const IconComponent = icon;

	return (
		<Card className="group overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
			<div className="relative">
				<img
					src={video.thumbnailUrl}
					alt={video.title}
					className="aspect-[3/4] w-full object-cover transition-transform duration-200 group-hover:scale-105"
				/>
				<div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
					<Button
						size="sm"
						variant="secondary"
						className="backdrop-blur-sm bg-white/90 hover:bg-white"
					>
						<Play className="h-4 w-4 mr-2" />
						Play
					</Button>
				</div>
				<div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
					{video.duration}
				</div>
				<div className="absolute bottom-2 left-2">
					<Badge
						variant="secondary"
						className="bg-black/70 text-white border-0"
					>
						<IconComponent className="h-3 w-3 mr-1" />
						{video.views}
					</Badge>
				</div>
			</div>
			<CardContent className="p-4">
				<h3 className="font-semibold text-sm line-clamp-2 mb-2">
					{video.title}
				</h3>
				<p className="text-sm text-muted-foreground mb-2">{video.creator}</p>
				<div className="flex items-center justify-between">
					<div className="flex items-center text-xs text-muted-foreground">
						<Calendar className="h-3 w-3 mr-1" />
						{dateLabel} {dateValue}
					</div>
					<Button size="sm" variant="ghost" className="h-8 w-8 p-0">
						<ExternalLink className="h-3 w-3" />
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}

export const Route = createFileRoute("/dashboard/content")({
	component: ArchivedContent,
	staticData: {
		routeTitle: "Archived Content",
	},
});

function ArchivedContent() {
	return (
		<div className="space-y-6">
			<div className="space-y-2">
				<h1 className="text-3xl font-bold tracking-tight">Archived Content</h1>
				<p className="text-muted-foreground text-lg">
					Browse and manage your saved TikTok videos and bookmarks.
				</p>
			</div>

			<div className="grid gap-4 md:grid-cols-3">
				<Card className="border-0 shadow-md bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-950/50 dark:to-rose-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-pink-700 dark:text-pink-300">
							Liked Videos
						</CardTitle>
						<Heart className="h-4 w-4 text-pink-600 dark:text-pink-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-pink-900 dark:text-pink-100">
							{MOCK_ARCHIVED_VIDEOS.length}
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/50 dark:to-indigo-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-blue-700 dark:text-blue-300">
							Bookmarked Videos
						</CardTitle>
						<Bookmark className="h-4 w-4 text-blue-600 dark:text-blue-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-blue-900 dark:text-blue-100">
							{MOCK_BOOKMARKED_VIDEOS.length}
						</div>
					</CardContent>
				</Card>

				<Card className="border-0 shadow-md bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-950/50 dark:to-emerald-900/30">
					<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
						<CardTitle className="text-sm font-medium text-green-700 dark:text-green-300">
							Total Archived
						</CardTitle>
						<Play className="h-4 w-4 text-green-600 dark:text-green-400" />
					</CardHeader>
					<CardContent>
						<div className="text-2xl font-bold text-green-900 dark:text-green-100">
							{MOCK_ARCHIVED_VIDEOS.length + MOCK_BOOKMARKED_VIDEOS.length}
						</div>
					</CardContent>
				</Card>
			</div>

			<Tabs defaultValue="liked" className="space-y-6">
				<TabsList className="grid w-full grid-cols-2 lg:w-[400px]">
					<TabsTrigger value="liked" className="flex items-center gap-2">
						<Heart className="h-4 w-4" />
						Liked Videos
					</TabsTrigger>
					<TabsTrigger value="bookmarked" className="flex items-center gap-2">
						<Bookmark className="h-4 w-4" />
						Bookmarked Videos
					</TabsTrigger>
				</TabsList>

				<TabsContent value="liked" className="space-y-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{MOCK_ARCHIVED_VIDEOS.map((video) => (
							<VideoCard key={video.id} video={video} type="liked" />
						))}
					</div>
				</TabsContent>

				<TabsContent value="bookmarked" className="space-y-6">
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{MOCK_BOOKMARKED_VIDEOS.map((video) => (
							<VideoCard key={video.id} video={video} type="bookmarked" />
						))}
					</div>
				</TabsContent>
			</Tabs>

			<div className="text-center pt-6">
				<Button variant="outline" size="lg" className="min-w-[200px]">
					Load More Videos
				</Button>
			</div>
		</div>
	);
}
