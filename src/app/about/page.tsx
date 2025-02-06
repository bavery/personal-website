import TopBar from "@/ui/topbar";

const SKILLS = [
	"JavaScript",
	"ReactJS",
	"TypeScript",
	"Node.js",
	"Material UI",
	"Tailwind CSS",
	"HTML",
	"CSS",
	"XML",
	"XSL",
	"JSON",
	"PHP",
	"Python",
	"REST API",
	"GIT",
	"NPM"
];

export default function Page() {
	return (
		<div className="font-[family-name:var(--font-main)]">
			<TopBar />
			<h1 className="p-4 text-4xl font-semibold">About</h1>
			<div className="flex grow lg:p-20 md:p-10 p-4 lg:pt-2 md:pt-2 sm:pt-2">
				<div className="grow grid lg:grid-cols-3 md:grid-cols-2 md:gap-y-12 sm:grid-cols-1 gap-4">
					<SkillsCard title="Web Development" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M480-80q-84 0-157-31.5T196-197q-54-54-85-127.5T80-482q0-84 31-156.5T196-765q54-54 127-84.5T480-880q84 0 157 30.5T764-765q54 54 85 126.5T880-482q0 84-31 157.5T764-197q-54 54-127 85.5T480-80Zm0-58q35-36 58.5-82.5T577-331H384q14 60 37.5 108t58.5 85Zm-85-12q-25-38-43-82t-30-99H172q38 71 88 111.5T395-150Zm171-1q72-23 129.5-69T788-331H639q-13 54-30.5 98T566-151ZM152-391h159q-3-27-3.5-48.5T307-482q0-25 1-44.5t4-43.5H152q-7 24-9.5 43t-2.5 45q0 26 2.5 46.5T152-391Zm221 0h215q4-31 5-50.5t1-40.5q0-20-1-38.5t-5-49.5H373q-4 31-5 49.5t-1 38.5q0 21 1 40.5t5 50.5Zm275 0h160q7-24 9.5-44.5T820-482q0-26-2.5-45t-9.5-43H649q3 35 4 53.5t1 34.5q0 22-1.5 41.5T648-391Zm-10-239h150q-33-69-90.5-115T565-810q25 37 42.5 80T638-630Zm-254 0h194q-11-53-37-102.5T480-820q-32 27-54 71t-42 119Zm-212 0h151q11-54 28-96.5t43-82.5q-75 19-131 64t-91 115Z"/></svg>}>
						<p>With over 15 years of experience in developing and implementing fully functional UI experiences, I specialize in creating seamless, user-centric interfaces that enhance overall user experience. Additionally, I have 5+ years of expertise in JavaScript development, with a strong focus on React and TypeScript, utilizing industry-standard libraries and technologies to build dynamic, high-performance applications.</p>
					</SkillsCard>
					<SkillsCard title="Software Development" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M140-200q-24 0-42-18.5T80-260v-440q0-24 18-42t42-18h680q24 0 42 18t18 42v440q0 23-18 41.5T820-200H140Zm0-60h680v-440H140v440Zm160-65h360v-60H300v60Zm-97-125h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM203-575h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60Zm124 0h60v-60h-60v60Zm123 0h60v-60h-60v60ZM140-260v-440 440Z"/></svg>}>
						<p>With over 10 years of experience using Node.js, Python, and PHP, I have developed end-to-end working solutions across a range of projects. I have hands-on experience with backend systems, frontend frameworks, extensive API integrations, and some database management, enabling me to deliver functioning and intuitive applications.</p>
					</SkillsCard>
					<SkillsCard title="Solo or Team Player" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98-220h520v-34q0-16-9.5-31T585-306q-72-32-121-43t-106-11q-57 0-106.5 11T130-306q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448-631q0-39-25.5-64.5T358-721q-39 0-64.5 25.5T268-631q0 39 25.5 64.5T358-541Zm0 321Zm0-411Z"/></svg>}>
						<p>I have experience as both an individual contributor and a team player, thriving in both environments. Whether working independently to complete projects or collaborating with others, I am adaptable and focused on delivering results. Additionally, I have led teams, guiding them toward successful project outcomes while keeping morale high.</p>
					</SkillsCard>
					<SkillsCard title="Tools and Optimization" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M768-120 517-371l57-57 251 251-57 57Zm-581 0-57-57 290-290-107-107-23 23-44-44v85l-24 24-122-122 24-24h86l-48-48 131-131q17-17 37-23t44-6q24 0 44 8.5t37 25.5L348-699l48 48-24 24 104 104 122-122q-8-13-12.5-30t-4.5-36q0-53 38.5-91.5T711-841q15 0 25.5 3t17.5 8l-85 85 75 75 85-85q5 8 8.5 19.5T841-709q0 53-38.5 91.5T711-579q-18 0-31-2.5t-24-7.5L187-120Z"/></svg>}>
						<p>One of my favorite aspects of software development is optimizing tasks. Whether simple or complex, I find joy in scripting solutions that make processes easier and more efficient, saving time and effort. Creating tools not only enhances productivity but also provides an excellent opportunity to learn and experiment with new technologies, further expanding my skill set and knowledge.</p>
					</SkillsCard>
					<SkillsCard title="Coding Philosophy" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M240-80v-172q-57-52-88.5-121.5T120-520q0-150 105-255t255-105q125 0 221.5 73.5T827-615l55 218q4 14-5 25.5T853-360h-93v140q0 24.75-17.62 42.37Q724.75-160 700-160H600v80h-60v-140h160v-200h114l-45-180q-24-97-105-158.5T480-820q-125 0-212.5 86.5T180-522.46q0 64.42 26.32 122.39Q232.65-342.09 281-297l19 18v199h-60Zm257-370Zm-17 130q17 0 28.5-11.5T520-360q0-17-11.5-28.5T480-400q-17 0-28.5 11.5T440-360q0 17 11.5 28.5T480-320Zm-30-128h61q0-25 6.5-40.5T544-526q18-20 35-40.5t17-53.5q0-42-32.5-71T483-720q-40 0-72.5 23T365-637l55 23q7-22 24.5-35.5T483-663q22 0 36.5 12t14.5 31q0 21-12.5 37.5T492-549q-20 21-31 42t-11 59Z"/></svg>}>
						<p><strong>Write clean, readable code.</strong> If you can't easily explain what your code does by just looking at it, you're making things harder for yourself and your colleagues.</p>
						<p><strong>Understand the code before using it.</strong> I invest time in breaking down and learning concepts before applying them. I never rely on copy-pasting solutions just because they work.</p>
						<p><strong>Coding isn't confined to the keyboard.</strong> Some of my best problem-solving moments happen away from the screen—whether in the shower, chatting with friends or coworkers, or sipping tea. If you're stuck, stepping away for a fresh perspective can work wonders.</p>
					</SkillsCard>
					<SkillsCard title="Skills and Technology" icon={<svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#3d3d3d"><path d="M140-160q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H140Zm0-60h680v-436H140v436Zm160-72-42-42 103-104-104-104 43-42 146 146-146 146Zm190 4v-60h220v60H490Z"/></svg>}>
						<ul className="grid grid-cols-2">
							{ SKILLS.map((skill)=>{return <li key={skill} className="list-disc list-inside">{skill}</li>})}
						</ul>
					</SkillsCard>
				</div>
			</div>
			<p className="text-transparent">Yes, I had AI help me write these cards. I have a tough time talking about myself!</p>
		</div>
	);
}

function SkillsCard({children, title, icon}: Readonly<{children: React.ReactNode; title: string; icon?: React.ReactNode}>) {

	return (
		<div className="md:max-w-md flex flex-col rounded-xl bg-white text-gray-950 p-6 shadow-xl shadow-main/50 border border-2 z-10 border-main">
			<h2 className="flex items-center text-2xl mb-4">{title}{icon && <span className="ml-auto">{icon}</span>}</h2>
			{ children }
		</div>
	);

}