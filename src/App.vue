<template>
  <div class="flex items-center justify-center min-h-screen bg-slate-900 gap-8">
    <div class="p-8 bg-white rounded-2xl shadow-2xl transition-transform hover:scale-105">
      <h1
        class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400"
      >
        Tailwind v4 + Vite 成功！
      </h1>
      <p class="mt-4 text-gray-600 font-medium">如果你看到漸層文字和深色背景，表示安裝完美達成。</p>
      <button
        class="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800"
      >
        測試按鈕
      </button>
    </div>
    <div class="p-6 bg-midnight rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold text-white">這是一個標題</h2>
      <p class="text-gray-400">這是一段描述文字，使用了 Tailwind CSS 自定義的樣式。</p>
    </div>
    <div class="group p-6 bg-white hover:bg-blue-600 transition-colors">
      <h2 class="text-black group-hover:text-white">標題文字</h2>
      <p class="text-gray-500 group-hover:text-blue-100">當你碰到外面的框框，我就會變色!!</p>
    </div>
  </div>
</template>
