export default function Portfolio() {
  const skills = [
    "Google Cloud Platform",
    "BigQuery",
    "Apache Airflow",
    "Looker",
    "Power BI",
    "Python",
    "SQL",
    "Snowflake",
    "Terraform",
    "Data Modeling",
    "ETL / ELT",
    "Cloud Architecture",
  ];

  const projects = [
    {
      title: "Enterprise Data Migration – Teradata to BigQuery",
      desc: "Led enterprise-scale migration initiatives from Teradata to BigQuery, building scalable ingestion pipelines using Airflow, Dataflow, and Python while implementing automated validation, monitoring, and observability frameworks.",
      impact: "Enabled faster analytics, reduced operational overhead, and modernized enterprise reporting architecture.",
    },
    {
      title: "Enterprise BI Modernization with Looker",
      desc: "Built enterprise-grade Looker BI solutions with reusable semantic models, embedded analytics, governed KPIs, RBAC, API automations, and deployment automation using GZR and Looker Deployer.",
      impact: "Improved self-service analytics adoption and reduced dependency on engineering teams for reporting needs.",
    },
    {
      title: "Healthcare Billing & Analytics Platform",
      desc: "Designed healthcare billing data marts and analytics workflows focused on claims processing, reimbursement tracking, AR aging, and operational reporting.",
      impact: "Provided actionable insights for revenue cycle optimization and operational performance monitoring.",
    },
  ];

  const experience = [
    {
      role: "Data & Analytics Consultant / Lead Engineer",
      period: "Recent Years",
      details:
        "Delivered cloud transformation, enterprise analytics, and BI modernization programs for global clients.",
    },
    {
      role: "Senior Data Engineer / Analytics Engineer",
      period: "Several Years",
      details:
        "Built scalable cloud-native data pipelines, semantic layers, and analytics-ready datasets.",
    },
    {
      role: "BI & Data Warehouse Consultant",
      period: "Multiple Years",
      details:
        "Designed enterprise reporting systems, dimensional models, and dashboard solutions across industries.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-blue-200 text-sm mb-4">
              Data & Analytics Portfolio
            </p>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Merwin D’Mello
            </h1>
            <p className="text-xl text-slate-200 leading-relaxed mb-6">
              Data & Analytics Leader with 20+ years of experience designing
              scalable cloud data platforms, modern BI ecosystems, and
              enterprise analytics solutions.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Cloud Data Engineering
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Enterprise BI
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Data Architecture
              </span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                Analytics Transformation
              </span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Core Strengths</h2>
            <ul className="space-y-4 text-slate-200">
              <li>✔ Enterprise Data Platform Modernization</li>
              <li>✔ Large-Scale Cloud Migrations</li>
              <li>✔ Reusable Semantic Modeling & BI Governance</li>
              <li>✔ Data Engineering & Workflow Automation</li>
              <li>✔ Stakeholder Management & Team Leadership</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Extensive experience across cloud engineering, data architecture,
            analytics platforms, and enterprise reporting ecosystems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white rounded-2xl shadow-sm border border-slate-200 p-4 text-center font-medium hover:shadow-lg transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-slate-600 text-lg">
              Enterprise-scale data engineering and analytics transformation
              initiatives.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.desc}
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-4 text-sm text-slate-700">
                  <strong>Impact:</strong> {project.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-slate-600 text-lg">
            A journey across data engineering, analytics, and enterprise cloud
            transformation.
          </p>
        </div>

        <div className="space-y-6">
          {experience.map((item) => (
            <div
              key={item.role}
              className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <span className="text-blue-700 font-medium">
                  {item.period}
                </span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Work With Me?</h2>
          <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
            I combine deep technical expertise with business-focused execution,
            helping organizations modernize data ecosystems, improve analytics
            adoption, and deliver scalable cloud-native solutions that create
            measurable business impact.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Ownership</h3>
              <p className="text-slate-300 text-sm">
                Strong delivery mindset with focus on scalable, maintainable,
                and business-aligned solutions.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Versatility</h3>
              <p className="text-slate-300 text-sm">
                Experience across roles including Database Developer, Data
                Engineer, Analytics Engineer, and BI Consultant.
              </p>
            </div>

            <div className="bg-white/5 rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">Leadership</h3>
              <p className="text-slate-300 text-sm">
                Managed and mentored global engineering teams while working
                closely with international stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
