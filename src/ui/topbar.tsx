import Link from "next/link";

export default function TopBar() {
	return (
		<div className="flex gap-x-4 min-w-screen h-12 bg-main text-white items-center font-[family-name:var(--font-main)] pl-4 pr-4">
			<div className="text-lg mr-auto select-none">Brandon Avery</div>
			<Link className="text-sm" href="/">Home</Link>
			<Link className="text-sm" href="/about">About</Link>
			<Link className="text-sm" href="/tools">Tools</Link>
		</div>
	)
}