<template>
	<component
		:is="$attrs.href ? 'a' : 'button'"
		:type="type"
		class="rounded-[10px] text-SemiBold-button transition-all duration-300"
		:class="[
			{ ' max-w-max' : $attrs.href },
			{
				green:'bg-[#00C073] text-white hover:bg-black active:bg-[#004978] disabled:opacity-80 focus-visible:outline-black focus-visible:outline-2',
				blue:'bg-[#0070B8] text-white hover:bg-black active:bg-[#004978] disabled:opacity-80 focus-visible:outline-black focus-visible:outline-2',
			}[theme ? theme : 'transparent'],
			// big ? 'px-[27px] py-[15px]' : small ? 'px-[8px] py-[15px]' : 'px-[33px] py-[6px]'
		]"
	>
		<span><slot /></span>
	</component>
</template>

<script setup>

	const props = defineProps({
		theme: { type: String, default: () => '' },
		fullLink: { type: Boolean, default: () => false },
		big: { type: Boolean, default: () => false },
		small: { type: Boolean, default: () => false },
		type: { type: String, default: () => null }
	})
</script>

<style>
</style>
