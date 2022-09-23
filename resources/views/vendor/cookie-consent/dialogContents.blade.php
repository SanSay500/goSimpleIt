<div class="js-cookie-consent cookie-consent fixed bottom-0 inset-x-0 pb-2">
    <div class="max-w-7xl mx-auto px-6">
        <div class="p-2 rounded-lg bg-yellow-100">
            <div class="flex items-center justify-between flex-wrap">
                <div class="w-0 flex-1 items-center hidden md:inline">
                    <p class="ml-3 text-black cookie-consent__message">
                        {!! trans('cookie-consent::texts.message') !!}
                    </p>
                </div>
                <div class="mt-2 flex-shrink-0 flex flex-row w-full sm:mt-0 sm:w-auto">
                    <button class="js-cookie-consent-agree cookie-consent__agree cursor-pointer flex items-center justify-right px-4 py-2 rounded-md text-sm font-medium text-yellow-800 bg-yellow-400 hover:bg-yellow-300">
                        {{ trans('cookie-consent::texts.agree') }}
                    </button>
                    <button class="ml-2 js-cookie-consent-agree cookie-consent__agree cursor-pointer flex items-center justify-left px-4 py-2 rounded-md text-sm font-medium text-black-800 bg-red-400 hover:bg-red-300">
                        {{ trans('cookie-consent::texts.disagree') }}
                    </button>
                </div>
            </div>
        </div>
    </div>
</div>
