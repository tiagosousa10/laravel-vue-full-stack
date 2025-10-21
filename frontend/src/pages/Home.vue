<template>
  <div>
    <header
      class="relative bg-gray-800 after:pointer-events-none after:absolute after:inset-x-0 after:inset-y-0 after:border-y after:border-white/10"
    >
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-white">Upload</h1>
      </div>
    </header>
    <main>
      <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <!-- Cover photo -->
        <div class="mb-4">
          <label
            for="cover-photo"
            class="block text-sm/6 font-medium text-white"
            >Image</label
          >
          <div
            class="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 px-6 py-10"
          >
            <div class="text-center">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                data-slot="icon"
                aria-hidden="true"
                class="mx-auto size-12 text-gray-600"
              >
                <path
                  d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                />
              </svg>
              <div class="mt-4 flex text-sm/6 text-gray-400">
                <label
                  for="file-upload"
                  class="relative cursor-pointer rounded-md bg-transparent font-semibold text-indigo-400 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-500 hover:text-indigo-300"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    type="file"
                    name="file-upload"
                    class="sr-only"
                  />
                </label>
                <p class="pl-1">or drag and drop</p>
              </div>
              <p class="text-xs/5 text-gray-400">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
        <!-- Label -->
        <div class="mb-4">
          <label for="label" class="block text-sm/6 font-medium text-gray-900"
            >Label</label
          >
          <div class="mt-2">
            <input
              id="first-name"
              type="text"
              name="first-name"
              autocomplete="given-name"
              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            />
          </div>
        </div>

        <!-- Button -->
        <button
          type="submit"
          class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Upload
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
