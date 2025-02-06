import Link from "next/link";

export default function Page() {
	return (
		<>
			<h1 className="text-2xl mb-8 font-semibold">Tools</h1>
			<Link href="/tools/base64conversion">Base64 Conversion - Convert a string to and from base64</Link>
		</>
	);
}