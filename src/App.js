import React, { useState } from "react";
import PregnancyTimeline from "./components/PregnancyTimeline";
import DueDateCalculator from "./components/DueDateCalculator";
import GTPALCalculator from "./components/GTPALCalculator";
import LaborSimulation from "./components/LaborSimulation";

function App() {
  const [activeModule, setActiveModule] = useState("intro");
  const [completedModules, setCompletedModules] = useState([]);

  // Track module completion
  const completeModule = (moduleId) => {
    if (!completedModules.includes(moduleId)) {
      setCompletedModules([...completedModules, moduleId]);
    }
  };

  // Calculate progress percentage
  const getProgressPercentage = () => {
    const totalModules = 7; // Total number of modules
    return (completedModules.length / totalModules) * 100;
  };

  // Navigate to a module and mark it as visited
  const navigateToModule = (moduleId) => {
    setActiveModule(moduleId);
    completeModule(moduleId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="pregnancy-learning-platform">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 sm:p-5">
        <div className="container mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Pregnancy & Childbirth Learning Platform
          </h1>
          <p>
            Interactive learning modules to help you master obstetric concepts
          </p>
        </div>
      </header>

      <nav className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto py-2 sm:py-3 px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-xl font-bold text-indigo-700 mb-2 sm:mb-0">
              OB Learning
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => navigateToModule("intro")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "intro"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Introduction
              </button>
              <button
                onClick={() => navigateToModule("basics")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "basics"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Conception & Dating
              </button>
              <button
                onClick={() => navigateToModule("timeline")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "timeline"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Pregnancy Timeline
              </button>
              <button
                onClick={() => navigateToModule("gtpal")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "gtpal"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                GTPAL System
              </button>
              <button
                onClick={() => navigateToModule("labor")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "labor"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Labor & Birth
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-3">
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-gradient-to-r from-indigo-500 to-purple-500 h-3 rounded-full transition-all duration-500"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>

        {/* Introduction Module */}
        {activeModule === "intro" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Introduction to Pregnancy & Childbirth
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 1 of 7
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
                Navigate through different modules using the navigation menu at
                the top. Each module contains interactive elements to help
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
                    <li>Labor stages interactive simulation</li>
                    <li>Knowledge check quizzes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() => navigateToModule("basics")}
                className="px-6 py-3 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              >
                Start Learning
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
                Module 2 of 7
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("intro")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Introduction
              </button>
              <button
                onClick={() => navigateToModule("timeline")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Pregnancy Timeline
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
                Module 3 of 7
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("basics")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Conception & Dating
              </button>
              <button
                onClick={() => navigateToModule("gtpal")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: GTPAL System
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
                Module 4 of 7
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("timeline")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Pregnancy Timeline
              </button>
              <button
                onClick={() => navigateToModule("labor")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Labor & Birth
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
                Module 5 of 7
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

            <LaborSimulation />

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("gtpal")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: GTPAL System
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
