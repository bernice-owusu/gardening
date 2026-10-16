import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Compass, 
  Hammer, 
  Sparkles, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { WORKING_STEPS } from '../data/siteData';

export const WorkingProcessSection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const activeStep = WORKING_STEPS[activeStepIndex];

  const getPhaseIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <FileText className="w-5 h-5" />;
      case 2:
        return <Hammer className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 bg-[#FFFFFF] relative overflow-hidden">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#CEF17B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#053627]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-[#F4F8F1] px-5 py-2 rounded-full border border-gray-200 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#195D49]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#195D49]">
              Architectural Journey
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#053627] tracking-tight">
            Our 4-Phase Precision Landscape Process
          </h2>

          <p className="text-base text-[#6D827C] leading-relaxed max-w-2xl mx-auto">
            From initial soil pH testing and 3D architectural blueprinting to master stonework and
            calibrated drip irrigation, every stage is executed with uncompromised precision.
          </p>
        </div>

        {/* Interactive Timeline Navigation Tabs */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            {/* Background connecting track line */}
            <div className="hidden md:block absolute top-1/2 left-8 right-8 h-1 bg-[#F4F8F1] -translate-y-1/2 z-0" />
            <div
              className="hidden md:block absolute top-1/2 left-8 h-1 bg-[#CEF17B] -translate-y-1/2 z-0 transition-all duration-500"
              style={{
                width: `${(activeStepIndex / (WORKING_STEPS.length - 1)) * 90}%`,
              }}
            />

            {/* 4 Clickable Step Nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 relative z-10">
              {WORKING_STEPS.map((step, idx) => {
                const isActive = activeStepIndex === idx;
                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStepIndex(idx)}
                    className={`p-4 rounded-2xl transition-all duration-300 text-left border flex flex-col justify-between ${
                      isActive
                        ? 'bg-[#053627] text-white border-[#053627] shadow-xl scale-102 ring-4 ring-[#CEF17B]/30'
                        : 'bg-white text-[#053627] border-gray-200 hover:border-[#195D49] hover:bg-[#F4F8F1]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs ${
                          isActive
                            ? 'bg-[#CEF17B] text-[#053627]'
                            : 'bg-[#F4F8F1] text-[#053627]'
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <span
                        className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          isActive
                            ? 'bg-white/15 text-[#CEF17B]'
                            : 'bg-gray-100 text-[#6D827C]'
                        }`}
                      >
                        {step.timeframe}
                      </span>
                    </div>

                    <h4 className="text-sm font-extrabold truncate">
                      {step.title}
                    </h4>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Featured Phase Spotlight Card */}
        <div className="bg-[#F4F8F1] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-gray-200/80 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Phase Visual with Rounded Aspect Frame */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80 sm:h-96 w-full border-4 border-white">
                <img
                  src={activeStep.image}
                  alt={activeStep.title}
                  className="w-full h-full object-cover transition-all duration-700 transform hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#053627]/80 via-transparent to-transparent" />

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-6 left-6 right-6 text-white flex items-center justify-between">
                  <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20">
                    <Clock className="w-3.5 h-3.5 text-[#CEF17B]" />
                    <span className="text-xs font-semibold">{activeStep.timeframe}</span>
                  </div>

                  <span className="text-xs font-bold uppercase tracking-wider bg-[#CEF17B] text-[#053627] px-3.5 py-1.5 rounded-full shadow-md">
                    {activeStep.step}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Phase Narrative & Deliverables */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 text-[#195D49] font-bold text-xs uppercase tracking-wider">
                {getPhaseIcon(activeStepIndex)}
                <span>Milestone Stage 0{activeStepIndex + 1} of 04</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#053627] leading-tight">
                {activeStep.title}
              </h3>

              <p className="text-base text-[#6D827C] leading-relaxed">
                {activeStep.description}
              </p>

              {/* Official Deliverable Badge Box */}
              <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#CEF17B] text-[#053627] flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-xs uppercase tracking-wider font-extrabold text-[#195D49]">
                    Key Phase Deliverable
                  </span>
                  <h4 className="text-base font-extrabold text-[#053627]">
                    {activeStep.deliverable}
                  </h4>
                </div>
              </div>

              {/* Milestone checklist points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-semibold text-[#053627]">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#195D49]" />
                  <span>Licensed &amp; Insured Crew</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#195D49]" />
                  <span>Transparent Daily Progress Logs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#195D49]" />
                  <span>Eco-Certified Organic Soil Blends</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-[#195D49]" />
                  <span>100% On-Schedule Completion</span>
                </div>
              </div>

              {/* Next Phase Navigation Button */}
              <div className="pt-4 flex items-center space-x-4">
                {activeStepIndex < WORKING_STEPS.length - 1 ? (
                  <button
                    onClick={() => setActiveStepIndex((prev) => prev + 1)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#053627] text-[#CEF17B] hover:bg-[#195D49] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Next Phase: {WORKING_STEPS[activeStepIndex + 1].title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => setActiveStepIndex(0)}
                    className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-[#CEF17B] text-[#053627] hover:bg-[#bbec48] font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                  >
                    <span>Restart Process Tour</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
