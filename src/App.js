import React, { useState } from "react";
import PregnancyTimeline from "./components/PregnancyTimeline";
import DueDateCalculator from "./components/DueDateCalculator";
import GTPALCalculator from "./components/GTPALCalculator";
import LaborSimulation from "./components/LaborSimulation";
import PregnancySignsQuiz from "./components/PregnancySignsQuiz";
import PregnancyBodyChangesSimulator from "./components/PregnancyBodyChangesSimulator";
import TeratogenExplorer from "./components/TeratogenExplorer";
import WomensHealthAssessment from "./components/WomensHealthAssessment";
import FinalExam from "./components/FinalExam";

function App() {
  const [activeModule, setActiveModule] = useState("intro");
  const [completedModules, setCompletedModules] = useState([]);
  const [examResults, setExamResults] = useState(null);

  // Define all modules for the navigation - Updated to include final exam
  const modules = [
    { id: "intro", name: "Introduction" },
    { id: "womenshealth", name: "Women's Health" },
    { id: "basics", name: "Conception & Dating" },
    { id: "gtpal", name: "GTPAL System" },
    { id: "signs", name: "Pregnancy Signs" },
    { id: "timeline", name: "Pregnancy Timeline" },
    { id: "bodychanges", name: "Body Changes" },
    { id: "complications", name: "Complications" },
    { id: "labor", name: "Labor & Birth" },
    { id: "finalexam", name: "Final Exam" },
  ];

  // Find current module index
  const currentModuleIndex = modules.findIndex(
    (module) => module.id === activeModule
  );

  // Track module completion
  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  // Calculate progress percentage
  const getProgressPercentage = () => {
    return (completedModules.length / modules.length) * 100;
  };

  // Navigate to a module and mark it as visited
  const navigateToModule = (moduleId) => {
    setActiveModule(moduleId);
    completeModule(moduleId);
    window.scrollTo(0, 0);
  };

  // Navigate to previous module
  const navigateToPrevious = () => {
    const currentIndex = modules.findIndex(
      (module) => module.id === activeModule
    );
    if (currentIndex > 0) {
      navigateToModule(modules[currentIndex - 1].id);
    }
  };

  // Navigate to next module
  const navigateToNext = () => {
    const currentIndex = modules.findIndex(
      (module) => module.id === activeModule
    );
    if (currentIndex < modules.length - 1) {
      navigateToModule(modules[currentIndex + 1].id);
    } else {
      navigateToModule("intro"); // Loop back to start if at the end
    }
  };

  // Handle exam completion
  const handleExamCompletion = (results) => {
    setExamResults(results);
    completeModule("finalexam");
  };

  return (
    <div className="pregnancy-learning-platform">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-5">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">
            Pregnancy & Childbirth Learning Platform
          </h1>
          <p className="text-center">
            Interactive learning modules to help you master obstetric concepts
          </p>
        </div>
      </header>

      {/* Progress Navigation */}
      <nav className="sticky top-0 bg-white shadow-md z-10 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={navigateToPrevious}
              className={`flex items-center justify-center p-2 rounded-full ${
                currentModuleIndex > 0
                  ? "text-indigo-600 hover:bg-indigo-50"
                  : "text-gray-300 cursor-not-allowed"
              }`}
              disabled={currentModuleIndex === 0}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div className="text-lg font-bold text-indigo-700">
              Module {currentModuleIndex + 1} of {modules.length}:{" "}
              {modules[currentModuleIndex].name}
            </div>

            <button
              onClick={navigateToNext}
              className="flex items-center justify-center p-2 rounded-full text-indigo-600 hover:bg-indigo-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          {/* Module steps visualization */}
          <div className="relative">
            <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${getProgressPercentage()}%` }}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500"
              ></div>
            </div>

            <div className="flex justify-between">
              {modules.map((module, index) => {
                const isCurrent = module.id === activeModule;
                const isCompleted = completedModules.includes(module.id);

                return (
                  <button
                    key={module.id}
                    onClick={() => navigateToModule(module.id)}
                    className="flex flex-col items-center group"
                  >
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mb-1 transition-all
                        ${
                          isCurrent
                            ? "bg-indigo-600 text-white scale-125"
                            : isCompleted
                            ? "bg-indigo-200 text-indigo-700"
                            : "bg-gray-200 text-gray-500"
                        }`}
                    >
                      {index + 1}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-3">
        {/* Introduction Module */}
        {activeModule === "intro" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Introduction to Pregnancy & Childbirth
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 1 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 mb-3">
                Welcome to the Pregnancy and Childbirth Learning Platform! This
                interactive environment will help you master essential obstetric
                concepts through engaging visualizations, calculators, and
                interactive exercises.
              </p>
              <p className="text-gray-700 mb-3">
                We'll cover everything from conception basics to labor and
                delivery, with special focus on terminology, fetal development,
                prenatal care, and the signs of pregnancy.
              </p>
            </div>

            <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mb-6">
              <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                How to Use This Platform
              </h3>
              <p className="text-gray-700">
                Navigate through different modules using the progress navigation
                at the top. Each module contains interactive elements to help
                reinforce your learning. Complete activities to increase your
                progress bar and track your learning journey.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="bg-indigo-600 text-white px-4 py-2">
                  Learning Objectives
                </div>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Understand the timeline and trimesters of pregnancy</li>
                    <li>Master pregnancy dating using Naegele's Rule</li>
                    <li>Learn obstetric terminology (GTPAL system)</li>
                    <li>
                      Identify the presumptive, probable, and positive signs of
                      pregnancy
                    </li>
                    <li>Follow fetal development through all stages</li>
                    <li>
                      Understand the stages and processes of labor and birth
                    </li>
                    <li>Learn about physiological changes during pregnancy</li>
                    <li>Recognize complications and their management</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="bg-indigo-600 text-white px-4 py-2">
                  Features of This Platform
                </div>
                <div className="p-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Interactive pregnancy timeline</li>
                    <li>Due date calculator</li>
                    <li>Fetal development visualization</li>
                    <li>GTPAL system practice</li>
                    <li>Body changes simulator</li>
                    <li>Pregnancy signs quiz</li>
                    <li>Teratogen explorer</li>
                    <li>Labor stages interactive simulation</li>
                    <li>Knowledge check quizzes</li>
                    <li>Comprehensive final exam</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => navigateToModule("womenshealth")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                Start Learning
              </button>
            </div>
          </div>
        )}

        {/* Women's Health Module */}
        {activeModule === "womenshealth" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Women's Health Assessment
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 2 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Before diving into pregnancy-specific topics, it's important to
                understand key concepts in women's health. This module
                introduces essential topics and tests your knowledge of maternal
                health trends, hormonal influences, and ethical considerations
                in women's healthcare.
              </p>
            </div>

            <WomensHealthAssessment />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Conception & Dating Module */}
        {activeModule === "basics" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Conception & Pregnancy Dating
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 3 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Understanding how pregnancy begins and how to calculate
                important dates is fundamental in obstetric care. In this
                module, you'll learn about conception, the menstrual cycle,
                pregnancy timeline, and how to calculate due dates.
              </p>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                The Menstrual Cycle and Conception
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">
                  A typical menstrual cycle is 28 days long, with ovulation
                  occurring around day 14. During ovulation, an egg is released
                  from the ovary and is available for fertilization for about 24
                  hours.
                </p>
                <p className="text-gray-700">
                  If sperm fertilizes the egg in the fallopian tube, the
                  fertilized egg (zygote) begins dividing and travels to the
                  uterus. Around 6-10 days after fertilization, the developing
                  blastocyst implants in the uterine lining, beginning
                  pregnancy.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-semibold text-indigo-700 mb-4">
              Interactive Due Date Calculator
            </h3>
            <DueDateCalculator />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Pregnancy Signs Module */}
        {activeModule === "signs" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Pregnancy Signs & Symptoms
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 7 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Recognizing the signs and symptoms of pregnancy is crucial for
                healthcare providers. In this module, you'll learn about the
                different categories of pregnancy signs and test your knowledge
                with interactive activities.
              </p>
            </div>

            <PregnancySignsQuiz />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Pregnancy Timeline Module */}
        {activeModule === "timeline" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Pregnancy Timeline
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 5 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Understanding fetal development is crucial for healthcare
                providers. In this interactive timeline, you'll explore the
                stages of development from conception through birth, learning
                about key milestones and critical periods.
              </p>
            </div>

            <PregnancyTimeline />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Body Changes Module */}
        {activeModule === "bodychanges" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Maternal Physiological Changes
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 6 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Pregnancy triggers numerous adaptations in the maternal body to
                support fetal development. This module explores the
                physiological changes across different body systems by trimester
                and their clinical significance.
              </p>
            </div>

            <PregnancyBodyChangesSimulator />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* GTPAL System Module */}
        {activeModule === "gtpal" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Obstetric Terminology: GTPAL System
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 4 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Medical professionals use specific terminology to describe
                pregnancy history and status. In this module, you'll learn about
                the GTPAL system and practice applying it to clinical scenarios.
              </p>
            </div>

            <GTPALCalculator />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Complications Module */}
        {activeModule === "complications" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Pregnancy Complications
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 8 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Recognizing and managing pregnancy complications is essential
                for optimizing maternal and fetal outcomes. This module explores
                common complications and teratogens that can affect pregnancy.
              </p>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Hypertensive Disorders
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">
                  Gestational Hypertension
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>New-onset hypertension after 20 weeks gestation</li>
                  <li>
                    BP ≥140/90 mmHg on two occasions, at least 4 hours apart
                  </li>
                  <li>No proteinuria or other signs of organ damage</li>
                  <li>Often resolves postpartum</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Preeclampsia
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Hypertension plus proteinuria or end-organ damage</li>
                  <li>
                    Symptoms: headache, visual changes, epigastric pain, edema
                  </li>
                  <li>
                    Risk factors: primiparity, previous preeclampsia, chronic
                    hypertension, diabetes
                  </li>
                  <li>
                    Management: monitoring, antihypertensives, magnesium
                    sulfate, delivery when necessary
                  </li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  HELLP Syndrome
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Severe form of preeclampsia</li>
                  <li>Hemolysis, Elevated Liver enzymes, Low Platelets</li>
                  <li>Requires prompt delivery and intensive management</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Eclampsia
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Preeclampsia with seizures</li>
                  <li>Medical emergency requiring immediate intervention</li>
                  <li>
                    Management: seizure control, blood pressure management,
                    expedited delivery
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Other Common Complications
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">
                  Gestational Diabetes Mellitus (GDM)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>
                    Carbohydrate intolerance first diagnosed during pregnancy
                  </li>
                  <li>Screening: 50g glucose challenge test at 24-28 weeks</li>
                  <li>
                    Complications: macrosomia, birth trauma, neonatal
                    hypoglycemia
                  </li>
                  <li>
                    Management: diet modification, glucose monitoring, insulin
                    when needed
                  </li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Bleeding Disorders
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>
                    <strong>First Trimester:</strong> Miscarriage, ectopic
                    pregnancy, molar pregnancy
                  </li>
                  <li>
                    <strong>Second/Third Trimester:</strong> Placenta previa,
                    placental abruption, vasa previa
                  </li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Other Complications
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    <strong>Hyperemesis Gravidarum:</strong> Severe nausea and
                    vomiting beyond first trimester
                  </li>
                  <li>
                    <strong>Oligohydramnios/Polyhydramnios:</strong> Abnormal
                    amniotic fluid volume
                  </li>
                  <li>
                    <strong>Intrauterine Growth Restriction (IUGR):</strong>{" "}
                    Fetal growth less than expected
                  </li>
                  <li>
                    <strong>Premature Rupture of Membranes (PROM):</strong>{" "}
                    Rupture before onset of labor
                  </li>
                </ul>
              </div>
            </div>

            <TeratogenExplorer />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module
              </button>
            </div>
          </div>
        )}

        {/* Labor & Birth Module */}
        {activeModule === "labor" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Labor & Birth Simulation
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 9 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Understanding the process of labor and birth is essential for
                obstetric care. In this interactive simulation, you'll learn
                about the stages of labor, contraction patterns, and the
                cardinal movements of birth.
              </p>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Pain Management in Labor
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">
                  Non-pharmacologic Methods
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Breathing techniques and relaxation</li>
                  <li>Position changes and movement</li>
                  <li>Hydrotherapy (shower, tub)</li>
                  <li>Massage and counterpressure</li>
                  <li>Heat and cold therapy</li>
                  <li>TENS (transcutaneous electrical nerve stimulation)</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Pharmacologic Methods
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>
                    <strong>Systemic analgesics:</strong> Opioids (reduced pain
                    perception)
                  </li>
                  <li>
                    <strong>Regional anesthesia:</strong>
                    <ul className="list-disc list-inside ml-5 text-gray-700">
                      <li>Epidural: continuous infusion in epidural space</li>
                      <li>
                        Combined spinal-epidural (CSE): rapid onset with
                        long-lasting relief
                      </li>
                      <li>
                        Spinal: single injection for cesarean delivery or late
                        labor
                      </li>
                    </ul>
                  </li>
                  <li>
                    <strong>Inhaled analgesics:</strong> Nitrous oxide
                    (self-administered)
                  </li>
                  <li>
                    <strong>Local anesthesia:</strong> For episiotomy or
                    laceration repair
                  </li>
                </ul>
              </div>
            </div>

            <LaborSimulation />

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={navigateToNext}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next Module: Final Exam
              </button>
            </div>
          </div>
        )}

        {/* Final Exam Module */}
        {activeModule === "finalexam" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Comprehensive OB/GYN Final Exam
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 10 of {modules.length}
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                This comprehensive exam will test your knowledge across all areas of obstetrics 
                and gynecology covered in the previous modules. The exam consists of 200 multiple-choice 
                questions divided into 4 sets of 50 questions, with 2 hours allocated for each set.
              </p>
              <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 mt-4">
                <h3 className="text-lg font-semibold text-indigo-700 mb-2">
                  Final Exam Instructions
                </h3>
                <p className="text-gray-700 mb-2">
                  The exam will test your knowledge on the following topics:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Women's health and gynecology</li>
                  <li>Conception and pregnancy dating</li>
                  <li>Obstetric terminology and GTPAL system</li>
                  <li>Pregnancy signs and diagnosis</li>
                  <li>Fetal development and pregnancy timeline</li>
                  <li>Maternal physiological changes</li>
                  <li>Pregnancy complications and teratogens</li>
                  <li>Labor and delivery</li>
                  <li>Postpartum care</li>
                </ul>
              </div>
            </div>

            <FinalExam onComplete={handleExamCompletion} />

            {examResults && (
              <div className="mt-8 bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="text-lg font-semibold text-green-700 mb-2">
                  Congratulations on Completing the Course!
                </h3>
                <p className="text-gray-700 mb-2">
                  You have successfully completed all modules and the final exam. Your final score was {examResults.totalScore} out of {examResults.totalQuestions} ({examResults.percentageScore.toFixed(1)}%).
                </p>
                <p className="text-gray-700">
                  You may return to any module to review the material or restart the exam.
                </p>
              </div>
            )}

            <div className="flex justify-between mt-8">
              <button
                onClick={navigateToPrevious}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous Module
              </button>
              <button
                onClick={() => navigateToModule("intro")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Return to Introduction
              </button>
            </div>
          </div>
        )}
      </div>

      <footer className="bg-gray-800 text-white py-4 sm:py-6 mt-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold">
                Pregnancy & Childbirth Learning Platform
              </h3>
              <p className="text-gray-400">
                An interactive educational resource for healthcare students
              </p>
            </div>
            <div>
              <p className="text-gray-400">
                © {new Date().getFullYear()} All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
