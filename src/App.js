import React, { useState } from "react";
import PregnancyTimeline from "./components/PregnancyTimeline";
import DueDateCalculator from "./components/DueDateCalculator";
import GTPALCalculator from "./components/GTPALCalculator";
import LaborSimulation from "./components/LaborSimulation";
import PregnancySignsQuiz from "./components/PregnancySignsQuiz";
import PregnancyBodyChangesSimulator from "./components/PregnancyBodyChangesSimulator";
import TeratogenExplorer from "./components/TeratogenExplorer";
import WomensHealthAssessment from "./components/WomensHealthAssessment";

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
    const totalModules = 10; // Updated total number of modules
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
                onClick={() => navigateToModule("signs")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "signs"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Pregnancy Signs
              </button>
              <button
                onClick={() => navigateToModule("bodychanges")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "bodychanges"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Body Changes
              </button>
              <button
                onClick={() => navigateToModule("nutrition")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "nutrition"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Nutrition
              </button>
              <button
                onClick={() => navigateToModule("wellbeing")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "wellbeing"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Fetal Wellbeing
              </button>
              <button
                onClick={() => navigateToModule("complications")}
                className={`px-3 py-2 rounded-md transition-colors ${
                  activeModule === "complications"
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                Complications
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
                Module 1 of 10
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
                    <li>Fetal wellbeing assessment tools</li>
                    <li>Teratogen explorer</li>
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
                Module 2 of 10
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
                Module 3 of 10
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
                Module 4 of 10
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
                onClick={() => navigateToModule("signs")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Pregnancy Signs
              </button>
            </div>
          </div>
        )}
        {/* Pregnancy Signs Module */}
        {activeModule === "signs" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Pregnancy Signs and Symptoms
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 5 of 10
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Recognizing the signs and symptoms of pregnancy is essential for
                clinical practice. In this module, you'll learn to distinguish
                between presumptive, probable, and positive signs of pregnancy
                through interactive activities.
              </p>
            </div>

            <PregnancySignsQuiz />

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("gtpal")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: GTPAL System
              </button>
              <button
                onClick={() => navigateToModule("bodychanges")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Body Changes
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
                Module 6 of 10
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("signs")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Pregnancy Signs
              </button>
              <button
                onClick={() => navigateToModule("nutrition")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Nutrition
              </button>
            </div>
          </div>
        )}
        {/* Nutrition Module */}
        {activeModule === "nutrition" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Nutrition and Health Promotion
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 7 of 10
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Proper nutrition and lifestyle habits are critical for maternal
                and fetal well-being. This module covers nutritional
                requirements during pregnancy, weight gain recommendations, and
                safe exercise practices.
              </p>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Nutritional Requirements During Pregnancy
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">
                  Caloric Needs
                </h3>
                <p className="text-gray-700 mb-3">
                  Pregnancy requires approximately 300 additional calories per
                  day on average. This varies based on pre-pregnancy weight,
                  activity level, and trimester:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>First trimester: minimal additional calories needed</li>
                  <li>Second and third trimesters: greater caloric demands</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Essential Nutrients
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>
                    <strong>Protein:</strong> Increased needs for fetal growth
                    and maternal tissue development
                  </li>
                  <li>
                    <strong>Iron:</strong> Prevents anemia; supports increased
                    maternal blood volume and fetal iron stores
                  </li>
                  <li>
                    <strong>Folic Acid:</strong> Critical for neural tube
                    development; recommended 400-600 mcg daily
                  </li>
                  <li>
                    <strong>Calcium:</strong> Supports fetal skeletal
                    development; prevents maternal bone loss
                  </li>
                  <li>
                    <strong>Vitamin D:</strong> Enhances calcium absorption;
                    important for immune function
                  </li>
                  <li>
                    <strong>Omega-3 Fatty Acids:</strong> Support fetal brain
                    and eye development
                  </li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Foods to Emphasize
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Lean proteins (meat, poultry, fish, legumes)</li>
                  <li>Dairy products or calcium-fortified alternatives</li>
                  <li>Whole grains</li>
                  <li>Variety of fruits and vegetables</li>
                  <li>Healthy fats (olive oil, avocados, nuts)</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Foods to Avoid or Limit
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>Raw or undercooked meat, poultry, eggs, and seafood</li>
                  <li>Unpasteurized dairy products</li>
                  <li>Deli meats unless heated until steaming</li>
                  <li>
                    High-mercury fish (shark, swordfish, king mackerel,
                    tilefish)
                  </li>
                  <li>Unwashed produce</li>
                  <li>Excessive caffeine</li>
                  <li>Alcohol (complete abstinence recommended)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Weight Gain Recommendations
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-3">
                  Appropriate weight gain during pregnancy depends on
                  pre-pregnancy BMI:
                </p>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border">
                    <thead>
                      <tr className="bg-indigo-100">
                        <th className="py-2 px-3 border text-left">
                          Pre-pregnancy BMI
                        </th>
                        <th className="py-2 px-3 border text-left">
                          Classification
                        </th>
                        <th className="py-2 px-3 border text-left">
                          Recommended Weight Gain
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="py-2 px-3 border">Below 18.5</td>
                        <td className="py-2 px-3 border">Underweight</td>
                        <td className="py-2 px-3 border">28-40 pounds</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border">18.5-24.9</td>
                        <td className="py-2 px-3 border">Normal weight</td>
                        <td className="py-2 px-3 border">25-35 pounds</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border">25-29.9</td>
                        <td className="py-2 px-3 border">Overweight</td>
                        <td className="py-2 px-3 border">15-25 pounds</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-3 border">30 or greater</td>
                        <td className="py-2 px-3 border">Obese</td>
                        <td className="py-2 px-3 border">11-20 pounds</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Note: Twin pregnancies require additional weight gain.
                </p>
              </div>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Exercise During Pregnancy
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">Benefits</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Improved cardiovascular fitness</li>
                  <li>Reduced back pain</li>
                  <li>Better weight management</li>
                  <li>Decreased risk of gestational diabetes</li>
                  <li>Improved mood and energy levels</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Recommendations
                </h3>
                <p className="text-gray-700 mb-2">
                  150 minutes of moderate activity per week (30 minutes, 5
                  days/week)
                </p>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Safe Activities
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Walking</li>
                  <li>Swimming</li>
                  <li>Stationary cycling</li>
                  <li>Modified yoga/pilates</li>
                  <li>Low-impact aerobics</li>
                </ul>

                <div className="bg-yellow-50 p-3 rounded-md">
                  <h3 className="font-semibold text-yellow-800 mb-1">
                    Warning Signs to Stop Exercise
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Vaginal bleeding</li>
                    <li>Dizziness or feeling faint</li>
                    <li>Increased shortness of breath</li>
                    <li>Chest pain</li>
                    <li>Headache</li>
                    <li>Muscle weakness</li>
                    <li>Calf pain or swelling</li>
                    <li>Regular painful contractions</li>
                    <li>Leaking amniotic fluid</li>
                  </ul>
                </div>
              </div>
            </div>

            <WomensHealthAssessment />

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("bodychanges")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Body Changes
              </button>
              <button
                onClick={() => navigateToModule("complications")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Complications
              </button>
            </div>
          </div>
        )}
        {/* Fetal Wellbeing Module */}
        {/*{activeModule === "wellbeing" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Prenatal Care and Fetal Wellbeing
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 8 of 10
              </span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">
                Monitoring fetal well-being is a critical component of prenatal
                care. This module introduces various assessment techniques used
                to evaluate fetal health and development throughout pregnancy.
              </p>
            </div>

            <div className="bg-white border rounded-lg overflow-hidden mb-6">
              <div className="bg-indigo-600 text-white px-4 py-2">
                Components of Prenatal Care
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-indigo-700 mb-2">
                  Initial Visit (6-10 weeks)
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>
                    Comprehensive medical, surgical, and obstetric history
                  </li>
                  <li>Family history and genetic screening</li>
                  <li>Physical examination</li>
                  <li>
                    Laboratory tests (blood type, antibody screen, CBC, STI
                    screening, urinalysis)
                  </li>
                  <li>Ultrasound for dating confirmation</li>
                  <li>Establishing EDC (estimated date of confinement)</li>
                  <li>GTPAL documentation</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Follow-up Visits
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Monitoring maternal vital signs</li>
                  <li>Weight tracking</li>
                  <li>Fundal height measurement</li>
                  <li>Fetal heart rate assessment</li>
                  <li>Urine screening for protein and glucose</li>
                  <li>Assessment of maternal concerns and symptoms</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Visit Frequency
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                  <li>Every 4 weeks until 28 weeks</li>
                  <li>Every 2 weeks from 28-36 weeks</li>
                  <li>Weekly after 36 weeks until delivery</li>
                  <li>More frequent for high-risk pregnancies</li>
                </ul>

                <h3 className="font-semibold text-indigo-700 mb-2">
                  Standard Prenatal Testing
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700">
                  <li>First trimester screening (11-14 weeks)</li>
                  <li>Second trimester screening (15-22 weeks)</li>
                  <li>Anatomy ultrasound (18-22 weeks)</li>
                  <li>Glucose challenge test (24-28 weeks)</li>
                  <li>Group B streptococcus screening (35-37 weeks)</li>
                </ul>
              </div>
            </div>

            <FetalWellbeingAssessment />

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("nutrition")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Nutrition
              </button>
              <button
                onClick={() => navigateToModule("complications")}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700 transition-colors"
              >
                Next: Complications
              </button>
            </div>
          </div>
        )}*/}
        {/* Complications Module */}
        {activeModule === "complications" && (
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-5 md:p-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b pb-4 mb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-indigo-700 mb-2 sm:mb-0">
                Complications of Pregnancy
              </h2>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                Module 9 of 10
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("wellbeing")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Fetal Wellbeing
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
                Module 10 of 10
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

            <div className="flex flex-col sm:flex-row justify-between mt-8 gap-3 sm:gap-0">
              <button
                onClick={() => navigateToModule("complications")}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium hover:bg-gray-300 transition-colors"
              >
                Previous: Complications
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
