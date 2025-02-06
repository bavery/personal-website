import Link from "next/link";

export default function SideNav() {
	const linkStyles = [
		"hover:text-black",
		"hover:bg-main/10",
		"py-1",
		"px-2",
		"rounded-md"

	]


	return (
		<div className="flex h-full flex-col px-2 py-4">
			<Link className={`text-xl font-semibold ${linkStyles.join(" ")}`} href="/tools">Tools</Link>
			<div className="flex flex-col px-2">
				<Link className={`text-lg hover:text-black ${linkStyles.join(" ")}`} href="/tools/base64conversion">Base64 Conversion</Link>
			</div>
		</div>
	)
}