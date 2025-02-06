"use client";
import { useEffect, useState } from "react";

const TEXT_TO_GO_IN_FOOTER = [
	"hello!    ",
	"welcome to my page     ",
	".  ",
	".. ",
	"...     ",
	"enjoy your stay!     ",
];

export default function FooterText() {
	const [footerText, setFooterText] = useState("");
	const [ftPos, setFTPos] = useState([0,0]);

	useEffect(()=>{
		const timer = setInterval(()=> {
			if(TEXT_TO_GO_IN_FOOTER[ftPos[0]][ftPos[1]]) {
				setFTPos([ftPos[0],ftPos[1] + 1]);
				setFooterText(footerText + TEXT_TO_GO_IN_FOOTER[ftPos[0]][ftPos[1]])
			} else if (TEXT_TO_GO_IN_FOOTER.length > ftPos[0] + 1) {
				setFooterText("");
				setFTPos([ftPos[0] + 1, 0]);
			} else {
				setFooterText("");
				setFTPos([0, 0]);
			}
		}, 125);


		return ()=> {
			clearInterval(timer);
		}
	})



	return (
		<div>{footerText}</div>
	)
}