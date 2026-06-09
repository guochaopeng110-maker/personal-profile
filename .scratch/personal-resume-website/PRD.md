Status: ready-for-agent

# Personal Resume Website PRD

## Problem Statement

用户需要一个可以长期经营的个人简历网站，用来面向中文招聘市场并兼顾英文阅读场景，系统化展示自己作为 `AI智能体 / AI应用 / 全栈开发工程师` 的职业定位，同时保留 `互动视频、VR、Unity、Qt、Babylon.js、C/C++、Node.js` 等差异化标签。

现有信息分散在 GitHub 仓库、GitHub Profile 和旧简历 PDF 中，无法形成统一、可信、具备品牌感的职业叙事。传统简历能表达基础履历，但无法充分承载跨领域项目、技术演进路径、项目细节和视觉说服力。普通作品集站又容易过度偏向炫技，削弱招聘场景下的可信度。

因此，需要一个以招聘转化为主、同时支持后续个人品牌扩展的多页式静态网站，先部署到 GitHub Pages，并具备后续继续扩展项目专题页、视觉素材和内容资产的能力。

## Solution

构建一个 `中文为主、支持英文切换` 的多页个人品牌与简历网站，采用 `首页 + 项目专题详情页` 的结构，以招聘阅读路径组织信息，通过高质量视觉设计、结构化内容和案例研究式项目页，把用户从 `C/C++ / Qt / VR / Web3D` 演进到 `AI智能体 / AI应用 / 全栈工程` 的职业路径讲清楚。

网站第一版将：

- 以招聘目标岗位为核心定位：`AI智能体 / AI应用 / 全栈开发工程师`
- 保留并强化差异化能力标签：`互动视频、Web3D、Babylon.js、Unity、PICO VR、Qt、C/C++、Node.js`
- 采用 `首页 + 项目详情页` 的多页结构，而不是单页长简历
- 使用案例研究型项目详情页，体现项目背景、角色、方案、难点、结果和素材
- 内容由结构化数据驱动，便于后续持续维护
- 支持 GitHub Pages 静态部署
- 第一版视觉目标为 `未来感但克制的高级科技感`，强调 `专业可信 + 有技术锋芒`

## User Stories

1. As a recruiter, I want to understand the candidate's target role within seconds, so that I can quickly decide whether the profile matches my hiring needs.
2. As a hiring manager, I want to see a concise and credible professional summary, so that I can understand the candidate's core strengths without reading a full PDF first.
3. As a technical interviewer, I want to inspect representative project themes instead of a flat repo list, so that I can evaluate engineering depth and technical range.
4. As a recruiter, I want the homepage to read like a premium resume site rather than a generic template, so that the candidate appears intentional and high-quality.
5. As a recruiter in China, I want the default content to be in Chinese, so that I can read the site naturally without translation friction.
6. As an English-speaking reviewer, I want to switch the site to English, so that I can understand the candidate's profile without depending on browser translation.
7. As a hiring manager, I want the site to explain how the candidate evolved from C/C++, Qt, VR and Web3D into AI agent and full-stack work, so that the career trajectory feels coherent rather than scattered.
8. As a recruiter, I want a clear call to action for downloading the PDF resume, so that I can forward it internally.
9. As a recruiter, I want visible links to GitHub and email, so that I can contact the candidate quickly.
10. As a privacy-conscious candidate, I want the public site to avoid exposing my phone number on the homepage, so that I can reduce spam and scraping risks.
11. As a hiring manager, I want to see work experience in a concise timeline with representative achievements, so that I can validate real-world delivery experience.
12. As a recruiter, I want the candidate's recent and strongest positioning to dominate the narrative, so that old roles do not dilute the current target role.
13. As a technical lead, I want the project section to highlight both product outcomes and engineering decisions, so that I can assess tradeoff thinking.
14. As a reviewer, I want the site to group projects into meaningful themes, so that I can understand the candidate's capability domains rather than memorize repository names.
15. As a recruiter, I want a dedicated theme for AI short drama, comic, and video workflow work, so that I can see how the candidate combines AI with multimedia products.
16. As a reviewer, I want a dedicated theme for Web3D and Babylon.js, so that I can evaluate the candidate's interactive 3D differentiation.
17. As a reviewer, I want a dedicated theme for Unity and PICO VR, so that I can understand the candidate's immersive experience engineering background.
18. As a reviewer, I want a dedicated theme for AI agents and AI applications, so that I can understand how the candidate applies AI beyond experiments.
19. As a reviewer, I want a dedicated theme for a complete business system project, so that I can evaluate traditional full-stack engineering maturity.
20. As a recruiter, I want project pages to include visuals, so that I can trust that the work is real and tangible.
21. As a reviewer, I want each project detail page to follow a consistent case-study structure, so that I can compare topics without re-learning the layout.
22. As a recruiter, I want the site navigation to match a resume-reading journey, so that I can move naturally from overview to detail.
23. As a user on mobile, I want the site to remain polished and readable on small screens, so that I can review it on my phone.
24. As a user on desktop, I want the site to feel immersive and premium, so that the candidate stands out among ordinary resume pages.
25. As a candidate, I want the content to be maintainable from structured data files, so that I can update projects and wording without rewriting page components.
26. As a candidate, I want GitHub Pages compatibility from the start, so that I can publish without needing a VPS.
27. As a maintainer, I want routing and asset loading to work correctly under a repository subpath, so that the deployed site does not break on GitHub Pages.
28. As a reviewer, I want the homepage hero to express a multi-domain identity rather than a single project screenshot, so that the candidate's range is communicated immediately.
29. As a recruiter, I want the "About Me" section to be a short narrative rather than keyword stuffing, so that the site feels more human and more senior.
30. As a technical reviewer, I want the skills section organized by capability domains, so that the candidate's strengths feel structured and intentional.
31. As a reviewer, I want work experience to show industrial and systems-integration credibility, so that I can trust the candidate with complex real-world systems.
32. As a reviewer, I want to see that the candidate has shipped across software, hardware, control systems, and interactive systems, so that I can assess cross-domain execution.
33. As a recruiter, I want the brand tone to feel confident but not flashy, so that the candidate appears serious and hireable.
34. As a candidate, I want the site to be extensible into a long-term personal brand asset, so that I can add more detail pages and content later.
35. As a future maintainer, I want the content model to support adding new project themes without redesigning the information architecture, so that the site can evolve cleanly.
36. As a reviewer, I want homepage summaries of each project theme plus links to deeper pages, so that I can choose the level of detail I need.
37. As a candidate, I want the first version to work well even when some project screenshots are missing, so that launch does not depend on perfect asset collection.
38. As a reviewer, I want GitHub links for each theme, so that I can inspect the underlying repositories when desired.
39. As a candidate, I want the site to visually distinguish core themes like AI, Web3D, VR, and engineering systems without fragmenting the brand, so that the identity feels rich but coherent.
40. As a recruiter, I want the site to clearly balance resume utility and personal brand value, so that it works both for immediate hiring decisions and deeper exploration.

## Implementation Decisions

- The site will be a static multi-page personal brand and resume website optimized for GitHub Pages deployment.
- The first implementation target will use a static-site-friendly frontend stack suitable for GitHub Pages, with structured content and client-side routing that can tolerate repository subpath deployment.
- The site will default to Chinese and support English switching as a first-class feature rather than a later add-on.
- The homepage will be organized around the hiring journey, with sections conceptually equivalent to: hero, about, project themes, work experience, capability domains, contact, and resume download.
- The site will present the candidate as `AI智能体 / AI应用 / 全栈开发工程师`, with older domains framed as differentiating depth rather than primary role targets.
- The main visual tone will be `未来感但克制的高级科技感`, explicitly avoiding generic template aesthetics, low-effort glow-heavy cyberpunk styling, and flat portfolio boilerplate.
- The site will emphasize `专业可信 + 有技术锋芒` rather than pure spectacle.
- The hero section will use a composite multi-domain visual language representing AI agents, multimedia workflows, Web3D, VR, and engineering systems, instead of a single avatar or single project screenshot.
- Real-person photography will not be required in the first version; the identity system will rely on typography, motion, layout, and technical visual metaphors.
- The candidate's display name will be shown as `彭国超 / Guochao Peng`.
- Public contact information on the site will include GitHub and email. Phone number will not be exposed on the homepage by default.
- PDF resume download will be a prominent call to action in the first screen and/or navigation layer.
- Work experience will be represented as a timeline with compressed representative contributions rather than long resume-style paragraphs.
- The work experience narrative will retain the long tenure at `天度（厦门）科技股份有限公司` and the later `长沙兴盛优选有限公司` DCS-related experience, but only surface the parts most relevant to the current positioning.
- The `长沙兴盛优选有限公司` experience will be framed around DCS, PLC integration, embedded-device integration, heterogeneous equipment orchestration, and real-world system control.
- The `关于我` section will be a short narrative about continuous technical evolution from simulation/VR/Qt/C++ work into AI application and full-stack engineering.
- The skills section will be grouped by capability domain, not by a long undifferentiated list of tools.
- Suggested capability domains are: `AI智能体 / AI应用`, `全栈与工程化`, `互动视频与多媒体`, `Web3D / VR / Unity`, and `底层与工业软件`.
- The homepage will highlight five main project themes rather than a large repo wall.
- The five main themes are:
  - `CargoShipManage` as the complete business-system / full-stack engineering theme
  - `AI短剧 / 漫剧 / 视频生成工作流` as a combined multimedia-AI theme spanning multiple repositories
  - `Web3D / Babylon.js` centered on `exm-player-web3d`
  - `Unity + PICO VR` centered on `building-stared-navigator-pico`
  - `AI智能体与AI应用` combining the learning-journey and practical business AI application line
- `AI智能体学习之旅` and `AI应用` will be merged into one stronger narrative theme so the result reads like applied capability rather than a study log plus a disconnected utility app.
- The AI short drama / comic / video workflow theme will aggregate multiple repositories into one editorialized case-study topic rather than showing each repository as an isolated card.
- Each project theme on the homepage will link to its own dedicated detail page.
- Project detail pages will use a case-study structure equivalent to: background/problem, role, solution/architecture, key challenges/tradeoffs, outcomes, visuals, and repository links.
- Detail pages will be designed to grow over time and become long-term brand assets, so the architecture should not assume minimal text-only content.
- Project visuals should come first from existing GitHub README assets or repository screenshots. Where assets are missing, the system should support placeholders and designed visual zones without breaking layout quality.
- Content should be authored in structured data files rather than embedded directly in UI components, enabling future updates to project content, bilingual copy, and homepage sections.
- The content model should support theme-level pages, nested repository links, bilingual text, optional visuals, optional metrics, and optional future additions like testimonials or talks.
- The route structure should support at least a homepage, project theme detail pages, and a not-found experience.
- The system should be deployable under a GitHub Pages repository path and should account for base-path-safe links, assets, and navigation behavior.
- The design system should include explicit visual tokens for typography, color, spacing, surfaces, gradients, and motion so the site feels intentional rather than ad hoc.
- Motion should be meaningful and restrained, such as staged reveals, ambient movement, and transitions that reinforce technical sophistication.
- The information architecture should preserve the possibility of future expansion into more detailed project pages, blog-like content, or custom-domain hosting, without needing a structural rewrite.
- If the named external design skills are available later, they should influence detailed art direction and refinement, but the PRD should not block on their immediate use.

## Testing Decisions

- Good tests should verify external behavior and user-facing outcomes, not internal implementation details or component internals.
- Content-data tests should verify that required structured content exists for each language, each main project theme, each route, and each critical CTA.
- Routing tests should verify that homepage and project detail navigation work correctly, and that the deployed route strategy remains compatible with GitHub Pages constraints.
- Rendering tests should verify that key sections appear for both languages and that important state changes like language switching update visible content consistently.
- Contract-style tests should verify that structured data shapes remain valid as more content is added over time.
- UI behavior tests should focus on whether the user can find the target role, access project pages, switch language, download the PDF resume, and reach contact links.
- Responsive verification should ensure that the homepage hero, navigation, project grids/cards, timeline, and detail pages remain readable and visually intentional on mobile and desktop.
- Visual QA should confirm that missing optional screenshots do not break the layout and that placeholders degrade gracefully.
- Build and deployment checks should verify successful static production builds and correct asset/link behavior under the GitHub Pages base path.
- Accessibility verification should include semantic headings, keyboard-navigable primary interactions, and language-switch behavior that remains understandable to users.
- Prior art is limited because the codebase is currently empty, so testing seams should be established at the highest practical level: structured content contracts, route-level behavior, and rendered user journeys.

## Out of Scope

- Building a CMS or online admin interface for content editing
- Adding backend services, databases, authentication, or server-side personalization
- Adding a blog system in the first version
- Adding analytics, event pipelines, or complex telemetry in the first version
- Exposing private contact data such as phone number on the public homepage
- Producing final polished screenshots or media for every single project before launch
- Rewriting the existing PDF resume as a separate document deliverable beyond linking the current version
- Supporting non-Chinese and non-English languages in the first version
- Implementing a full case-study archive for every repository in the GitHub account
- Designing for VPS or server-based deployment as the primary path

## Further Notes

- This website is both a hiring asset and a long-term personal brand foundation; decisions should favor extensibility without over-engineering the first release.
- The homepage must avoid looking like a generic developer portfolio template. This is a core product requirement, not a cosmetic preference.
- The current repo has no existing frontend code, so the implementation can establish clean conventions from scratch.
- The content should explicitly connect older industrial/VR/Web3D experience to current AI/full-stack goals so the profile feels cumulative.
- The project themes should be editorialized. The site should not mirror raw repository names when a stronger theme label will better serve readers.
- The first release target is GitHub Pages with repository-domain hosting. Custom-domain support can be introduced later.
