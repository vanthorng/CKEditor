<x-app-layout>
    <div class="pt-20 right-10 text-white bg-slate-600 text-right">

        <form method="POST" action="{{ route('logout') }}">
            @csrf
            <x-nav-link :href="route('logout')"   onclick="event.preventDefault();
            this.closest('form').submit();">
                {{ __('logout') }}
            </x-nav-link>

        </form>
    </div>
    @include('ckfinder::setup')
    <script>
        CKFinder.start();
    </script>
</x-app-layout>
