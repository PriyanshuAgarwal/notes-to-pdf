export default function Home() {
	return (
		<div className="min-h-screen bg-white font-sans text-slate-900">
			{/* Navbar */}
			<nav className="flex items-center justify-between px-6 py-4 lg:px-12">
				<a href="#" className="flex items-center gap-2.5 text-xl font-bold tracking-tight">
					<svg className="h-9 w-9 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
						<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
						<path d="M14 3v5h5" />
						<path d="M8 13h8" />
						<path d="M8 17h8" />
						<path d="M8 9h3" />
					</svg>
					Notes → PDF
				</a>
				<div className="flex items-center gap-5">
					<a href="/notes" className="rounded-lg bg-blue-600 px-5 py-2.5 text-base font-medium text-white hover:bg-blue-700">
						Try it free
					</a>
				</div>
			</nav>

			{/* Hero */}
			<section className="bg-slate-50 px-4 py-16 lg:px-8 lg:py-24">
				<div className="mx-auto grid max-w-8xl items-center gap-6 lg:grid-cols-[1fr_1.5fr]">
					<div className="space-y-6">
						<span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">
							<svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z" />
							</svg>
							AI-Powered Note Structuring
						</span>
						<h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 lg:text-5xl">
							From messy notes to polished PDFs{" "}
							<span className="relative inline-block text-blue-600">
								in seconds.
								<svg className="absolute -bottom-2 left-0 h-3 w-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 120 12" fill="none">
									<path d="M2 8C30 2 90 2 118 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
								</svg>
							</span>
						</h1>
						<p className="max-w-lg text-lg text-slate-600">
							Paste your meeting notes, class notes, or project updates. Our AI organizes them into professional, structured documents you can share or export.
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<a href="/notes" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
								Try it free
								<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</a>
							<a href="#" className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
								<svg className="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M10 8l6 4-6 4V8z" strokeLinejoin="round" />
								</svg>
								View example
							</a>
						</div>
						<div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<rect x="2" y="5" width="20" height="14" rx="2" />
									<path d="M2 10h20" />
								</svg>
								No credit card required
							</span>
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M12 6v6l4 2" />
								</svg>
								Setup in 30 seconds
							</span>
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<path d="M7 10l5 5 5-5" />
									<path d="M12 15V3" />
								</svg>
								Export in one click
							</span>
						</div>
						<div className="flex items-center gap-4 pt-2">
							<div className="flex -space-x-2">
								<img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=1" alt="User" />
								<img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=2" alt="User" />
								<img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=3" alt="User" />
								<img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=4" alt="User" />
								<img className="h-9 w-9 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/150?img=5" alt="User" />
							</div>
							<div className="space-y-0.5">
								<div className="flex items-center gap-1">
									<svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
									<svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
									<svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
									<svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
									<svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								</div>
								<p className="text-sm text-slate-600">
									<strong className="font-semibold text-slate-900">Loved by 5,000+ users</strong> from students to professionals
								</p>
							</div>
						</div>
					</div>

					<div className="relative flex items-stretch gap-5">
						<div className="min-w-0 flex-1">
							<p className="mb-2 text-base font-bold uppercase tracking-wider text-slate-700 text-center ">Before: Messy notes</p>
							<div className="space-y-3 rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-full">
								<div className="space-y-4 font-mono text-base leading-relaxed text-slate-700">
									<p>
										design team sync 5/20
										<br />
										lots to cover
									</p>
									<p>
										pdf output still messy :(
										<br />
										need cleaner structure
										<br />+ check design system updates
									</p>
									<p>
										who's taking the pdf work?
										<br />
										i can help w/ layout
										<br />
										if needed
									</p>
									<p>
										Also - doc templates??
										<br />
										maybe later
									</p>
									<p>
										let's ship v2 of the
										<br />
										export next week
									</p>
								</div>
							</div>
						</div>
						<div className="flex items-center justify-center self-center px-1">
							<div className="rounded-full bg-slate-100 p-3 text-slate-600 shadow-sm">
								<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M5 12h14M12 5l7 7-7 7" />
								</svg>
							</div>
						</div>
						<div className="min-w-0 flex-1">
							<p className="mb-2 text-base font-bold uppercase tracking-wider text-slate-700 text-center">After: Structured PDF</p>
							<div className="space-y-5 rounded-xl border border-slate-200 bg-white p-6 shadow-sm h-full">
								<p className="text-2xl font-bold text-slate-900">Design Team Sync</p>
								<div className="border-t border-slate-100 pt-4">
									<p className="text-lg font-semibold text-blue-600">Summary</p>
									<p className="mt-2 text-base leading-relaxed text-slate-700">The team discussed improving the PDF export, assigning ownership, and planning updates to the design system.</p>
								</div>
								<div className="border-t border-slate-100 pt-4">
									<p className="text-lg font-semibold text-blue-600">Decisions</p>
									<ul className="mt-2 list-disc pl-5 text-base leading-relaxed text-slate-700">
										<li>Ship version 2 of the export next week</li>
									</ul>
								</div>
								<div className="border-t border-slate-100 pt-4">
									<p className="text-lg font-semibold text-blue-600">Action Items</p>
									<div className="mt-2 space-y-2 text-base leading-relaxed text-slate-700">
										<p className="flex items-start gap-3">
											<svg className="mt-1 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<rect x="3" y="3" width="18" height="18" rx="2" />
											</svg>
											Alex to own the PDF export work
										</p>
										<p className="flex items-start gap-3">
											<svg className="mt-1 h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
												<rect x="3" y="3" width="18" height="18" rx="2" />
											</svg>
											Taylor to share updates on the design system
										</p>
									</div>
								</div>
								<a href="#" className="mt-2 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-4 py-2 text-base font-medium text-blue-600 hover:bg-blue-50">
									<svg className="h-5 w-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
										<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
										<path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
									</svg>
									Export PDF
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Steps */}
			<section className="px-6 py-20 lg:px-12">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-16 text-center text-2xl font-bold text-slate-900">3 Simple Steps</h2>
					<div className="flex flex-col items-stretch gap-6 md:flex-row md:items-center md:justify-center">
						<div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[160px]">
							<div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<rect x="8" y="2" width="8" height="4" rx="1" />
									<path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
									<path d="M9 12h6M9 16h6" />
								</svg>
								<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">1</span>
							</div>
							<div>
								<h3 className="text-base font-semibold text-slate-900">Paste Your Notes</h3>
								<p className="mt-1 text-sm leading-relaxed text-blue-600">Add messy notes, meeting transcripts, or project updates.</p>
							</div>
						</div>

						<div className="hidden md:flex items-center justify-center px-2">
							<svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</div>

						<div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[160px]">
							<div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
									<path d="M14 2v6h6" />
									<path d="M12 18l-2-2 2-2" />
									<path d="M16 18l2-2-2-2" />
								</svg>
								<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">2</span>
							</div>
							<div>
								<h3 className="text-base font-semibold text-slate-900">AI Structures Content</h3>
								<p className="mt-1 text-sm leading-relaxed text-blue-600">Our AI organizes and structures your notes intelligently.</p>
							</div>
						</div>

						<div className="hidden md:flex items-center justify-center px-2">
							<svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</div>

						<div className="flex flex-1 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm min-h-[160px]">
							<div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
								<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<path d="M14 2v6h6" />
									<path d="M9 15l3 3 3-3" />
									<path d="M12 18V9" />
								</svg>
								<span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">3</span>
							</div>
							<div>
								<h3 className="text-base font-semibold text-slate-900">Export Professional PDF</h3>
								<p className="mt-1 text-sm leading-relaxed text-blue-600">Get a clean, polished PDF ready to share or save.</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Use cases */}
			<section className="bg-slate-50 px-6 py-20 lg:px-12">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-12 text-center text-2xl font-bold text-slate-900">Perfect for any use case</h2>
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
						{[
							{
								icon: (
									<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
										<circle cx="9" cy="7" r="4" />
										<path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
									</svg>
								),
								color: "bg-green-50 text-green-600",
								title: "Team Meetings",
								desc: "Turn meeting notes into action-oriented summaries.",
							},
							{
								icon: (
									<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path d="M22 10v6M2 10l10-5 10 5-10 5z" />
										<path d="M6 12v5c3 3 9 3 12 0v-5" />
									</svg>
								),
								color: "bg-purple-50 text-purple-600",
								title: "Student Notes",
								desc: "Convert class notes into organized study material.",
							},
							{
								icon: (
									<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path d="M20 7h-5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
										<path d="M15 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-2" />
										<path d="M2 12h12" />
									</svg>
								),
								color: "bg-orange-50 text-orange-600",
								title: "Project Updates",
								desc: "Create clean status reports from rough updates.",
							},
							{
								icon: (
									<svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
										<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
										<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
									</svg>
								),
								color: "bg-teal-50 text-teal-600",
								title: "Research Notes",
								desc: "Structure research findings into shareable documents.",
							},
						].map(c => (
							<div key={c.title} className="rounded-xl border border-slate-200 bg-white p-6">
								<div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-full ${c.color}`}>{c.icon}</div>
								<h3 className="mb-2 text-base font-semibold text-slate-900">{c.title}</h3>
								<p className="text-sm text-slate-600">{c.desc}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Beautiful documents */}
			<section className="px-6 py-20 lg:px-12">
				<div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
					<div className="space-y-6">
						<h2 className="text-3xl font-bold text-slate-900">
							Beautiful documents,
							<br />
							every time.
						</h2>
						<p className="max-w-md text-slate-600">AI formats your notes with clear headings, summaries, bullet points, and action items.</p>
						<a href="#" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50">
							View templates
						</a>
					</div>
					<div className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
						<div className="mb-4 flex items-start justify-between">
							<div>
								<h3 className="text-lg font-semibold text-slate-900">Project Kickoff Meeting</h3>
								<p className="text-sm text-slate-500">May 20, 2024</p>
							</div>
						</div>
						<div className="grid gap-6 sm:grid-cols-2">
							<div>
								<p className="mb-1 text-xs font-semibold text-blue-600">Summary</p>
								<p className="text-sm text-slate-600">The team aligned on project goals, deliverables, and timelines. We discussed key risks and dependencies.</p>
							</div>
							<div>
								<p className="mb-1 text-xs font-semibold text-blue-600">Action Items</p>
								<div className="space-y-1 text-sm text-slate-600">
									<p>
										<span className="inline-block h-3 w-3 rounded-sm border border-slate-300 mr-1 align-middle"></span> Sarah to finalize project timeline
									</p>
									<p>
										<span className="inline-block h-3 w-3 rounded-sm border border-slate-300 mr-1 align-middle"></span> Mike to prepare technical spec
									</p>
									<p>
										<span className="inline-block h-3 w-3 rounded-sm border border-slate-300 mr-1 align-middle"></span> Alex to set up analytics tracking
									</p>
								</div>
							</div>
							<div>
								<p className="mb-1 text-xs font-semibold text-blue-600">Decisions</p>
								<ul className="list-disc pl-4 text-sm text-slate-600">
									<li>Launch MVP in 8 weeks</li>
									<li>Use internal analytics for phase 1</li>
								</ul>
							</div>
						</div>
						<div className="absolute -right-10 top-1/2 hidden -translate-y-1/2 flex-col items-center gap-2 lg:flex">
							<svg className="absolute -left-20 top-1/2 h-20 w-20 -translate-y-1/2 text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" viewBox="0 0 100 60">
								<path d="M10 45C20 10 70 10 90 30" />
							</svg>
							<div className="rounded-full bg-white p-3 shadow-md ring-1 ring-slate-100">
								<svg className="h-8 w-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
									<path d="M14 3v5h5M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
								</svg>
							</div>
							<span className="text-xs font-medium text-slate-500">Export PDF</span>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials */}
			<section className="bg-slate-50 px-6 py-20 lg:px-12">
				<div className="mx-auto max-w-6xl">
					<h2 className="mb-12 text-center text-2xl font-bold text-slate-900">Loved by students and professionals</h2>
					<div className="grid gap-6 md:grid-cols-3">
						{[
							{ name: "Mark T.", role: "Product Manager", text: "This saves me hours every week. My meeting notes are always ready to share." },
							{ name: "Priya S.", role: "Computer Science Student", text: "Perfect for turning lecture notes into clean study guides." },
							{ name: "David L.", role: "Consultant", text: "The AI understands my notes better than any tool I've tried." },
						].map(t => (
							<div key={t.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
								<div className="mb-4 flex text-yellow-400">
									{[...Array(5)].map((_, i) => (
										<svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
										</svg>
									))}
								</div>
								<p className="mb-6 text-sm text-slate-700">"{t.text}"</p>
								<div className="flex items-center gap-3">
									<div className="h-10 w-10 rounded-full bg-slate-200" />
									<div>
										<p className="text-sm font-semibold text-slate-900">{t.name}</p>
										<p className="text-xs text-slate-500">{t.role}</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="border-t border-slate-100 px-6 py-8 lg:px-12">
				<div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
					<p className="text-sm text-slate-500">© 2026 Notes to PDF. All rights reserved.</p>
					<div className="flex gap-6 text-sm text-slate-500">
						<a href="#" className="hover:text-slate-900">
							Privacy
						</a>
						<a href="#" className="hover:text-slate-900">
							Terms
						</a>
						<a href="#" className="hover:text-slate-900">
							Contact
						</a>
					</div>
				</div>
			</footer>
		</div>
	);
}
