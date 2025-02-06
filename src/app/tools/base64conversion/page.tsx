"use client";
import { useRef } from "react";

export default function Page() {
	const b64Input = useRef<HTMLDivElement>(null);
	const decInput = useRef<HTMLDivElement>(null);

	function handlePaste(event: React.ClipboardEvent) {
		event.preventDefault();
		const paste = event.clipboardData.getData('text');
		const selection = window.getSelection();
		if (!selection || !selection.rangeCount) return;
		selection.deleteFromDocument();
		selection.getRangeAt(0).insertNode(document.createTextNode(paste));
		selection.collapseToEnd();
		handleChange({target: event.target});
	}

	function handleChange(event: React.ChangeEvent | {target: any}) {
		if(!b64Input.current || !decInput.current) return;
		try {
			if(b64Input.current === event.target) {
				const from = b64Input.current.textContent ?? "";
				decInput.current.textContent = atob(from);
			} else {
				const from = decInput.current.textContent ?? "";
				b64Input.current.textContent = btoa(from);
			}

		} catch (err) {
			console.error(err);
		}


	}

	return (
		<>
			<h1 className="text-2xl mb-8 font-semibold">Base64 Conversion</h1>
			<div className="flex gap-x-4">
				<div className="flex-grow w-full max-w-[50%]">
					<h3>Base64</h3>
					<div
						className =	"inline-block w-full min-h-48 border border-main rounded-sm p-2"
						onPaste =	{handlePaste}
						onInput = 	{handleChange}
						ref =		{b64Input}
						contentEditable></div>

				</div>
				<div className="flex-grow w-full max-w-[50%]">
					<h3>Decoded</h3>
					<div
						className =	"inline-block w-full min-h-48 border border-main rounded-sm p-2"
						onPaste =	{handlePaste}
						onInput = 	{handleChange}
						ref =		{decInput}
						contentEditable></div>

				</div>

			</div>
		</>
	);
}