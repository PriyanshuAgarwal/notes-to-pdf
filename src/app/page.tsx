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
					<a href="#" className="rounded-lg bg-blue-600 px-5 py-2.5 text-base font-medium text-white hover:bg-blue-700">
						Try it free
					</a>
				</div>
			</nav>

			{/* Hero */}
			<section className="bg-slate-50 px-6 py-16 lg:px-12 lg:py-24">
				<div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
					<div className="space-y-6">
						<span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-600">AI-Powered Note Structuring</span>
						<h1 className="text-4xl font-bold leading-tight tracking-tight lg:text-5xl">
							Turn messy notes into <span className="text-blue-600">professional PDFs</span> in seconds.
						</h1>
						<p className="max-w-lg text-lg text-slate-600">Paste rough meeting notes, class notes, or project updates. AI organizes them into structured documents ready to export.</p>
						<div className="flex flex-wrap items-center gap-4">
							<a href="#" className="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700">
								Try it free
							</a>
							<a href="#" className="flex items-center gap-2 rounded-lg border border-slate-200 px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50">
								<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<circle cx="12" cy="12" r="10" />
									<path d="M10 8l6 4-6 4V8z" strokeLinejoin="round" />
								</svg>
								View example
							</a>
						</div>
						<div className="flex items-center gap-6 text-sm text-slate-500">
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M20 6L9 17l-5-5" />
								</svg>{" "}
								No credit card required
							</span>
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M12 8v4l3 3M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
								</svg>{" "}
								Setup in 30 seconds
							</span>
							<span className="flex items-center gap-2">
								<svg className="h-4 w-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
									<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
									<path d="M7 10l5 5 5-5" />
									<path d="M12 15V3" />
								</svg>{" "}
								Export in one click
							</span>
						</div>
					</div>

					<div className="relative grid min-w-0 grid-cols-[1fr_auto_1fr] items-center gap-4">
						<div className="min-w-0 space-y-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Before: Messy notes</p>
							<div className="space-y-2 text-sm text-slate-600">
								<p className="font-medium text-slate-800">design team sync 5/20</p>
								<p>lots to cover</p>
								<p>pdf output still messy :(</p>
								<p>need cleaner structure</p>
								<p>
									+ check design system
									<br />
									updates
								</p>
								<p className="pt-2">who's taking the pdf work?</p>
								<p>
									i can help w/ layout
									<br />
									if needed
								</p>
								<p className="pt-2">
									Also - doc templates??
									<br />
									maybe later
								</p>
								<p className="pt-2">
									let's ship v2 of the
									<br />
									export next week
								</p>
							</div>
						</div>
						<div className="rounded-full bg-slate-100 p-3 text-slate-600 shadow-sm">
							<svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
								<path d="M5 12h14M12 5l7 7-7 7" />
							</svg>
						</div>
						<div className="min-w-0 rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
							<p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">After: Structured PDF</p>
							<div className="space-y-4">
								<p className="text-base font-semibold text-slate-900">Design Team Sync</p>
								<div className="border-t border-slate-100 pt-3">
									<p className="text-xs font-semibold text-blue-600">Summary</p>
									<p className="mt-1 text-sm text-slate-600">The team discussed improving the PDF export, assigning ownership, and planning updates to the design system.</p>
								</div>
								<div className="border-t border-slate-100 pt-3">
									<p className="text-xs font-semibold text-blue-600">Decisions</p>
									<ul className="mt-1 list-disc pl-4 text-sm text-slate-600">
										<li>Ship version 2 of the export next week</li>
									</ul>
								</div>
								<div className="border-t border-slate-100 pt-3">
									<p className="text-xs font-semibold text-blue-600">Action Items</p>
									<div className="mt-1 space-y-1 text-sm text-slate-600">
										<p>
											<span className="mr-2 inline-block h-3 w-3 rounded border border-slate-300 align-middle"></span>Alex to own the PDF export work
										</p>
										<p>
											<span className="mr-2 inline-block h-3 w-3 rounded border border-slate-300 align-middle"></span>Taylor to share updates on the design system
										</p>
									</div>
								</div>
								<a href="#" className="mt-2 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-50">
									<svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
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
					<h2 className="mb-16 text-center text-2xl font-bold text-slate-900">From notes to PDF in 3 simple steps</h2>
					<div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-8">
						<div className="flex items-start gap-4">
							<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
									<path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" />
									<path d="M12 11h4" />
									<path d="M12 16h4" />
									<path d="M8 11h.01" />
									<path d="M8 16h.01" />
								</svg>
							</div>
							<div className="max-w-[220px]">
								<div className="mb-1 flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">1</span>
									<h3 className="text-base font-semibold text-slate-900">Paste your notes</h3>
								</div>
								<p className="text-sm text-slate-600">Add your raw notes, meeting transcripts, or ideas.</p>
							</div>
						</div>

						<svg className="hidden h-5 w-5 shrink-0 text-slate-400 md:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>

						<div className="flex items-start gap-4">
							<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.937A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0L9.937 15.5z" />
								</svg>
							</div>
							<div className="max-w-[220px]">
								<div className="mb-1 flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">2</span>
									<h3 className="text-base font-semibold text-slate-900">AI structures content</h3>
								</div>
								<p className="text-sm text-slate-600">Our AI organizes and formats your notes instantly.</p>
							</div>
						</div>

						<svg className="hidden h-5 w-5 shrink-0 text-slate-400 md:block" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7" />
						</svg>

						<div className="flex items-start gap-4">
							<div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600">
								<svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
									<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
									<path d="M14 2v6h6" />
									<path d="M12 18v-6" />
									<path d="M9 15l3 3 3-3" />
								</svg>
							</div>
							<div className="max-w-[220px]">
								<div className="mb-1 flex items-center gap-2">
									<span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs font-semibold text-white">3</span>
									<h3 className="text-base font-semibold text-slate-900">Export your PDF</h3>
								</div>
								<p className="text-sm text-slate-600">Download a clean, professional PDF in one click.</p>
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
