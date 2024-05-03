import { ref, onMounted, computed, reactive } from "vue";

export default function() {
	const media = reactive({
		sm: false,
		md: false,
		lg: false,
		mouse: false,
	})

	const sm = computed(() => media.sm)
	const md = computed(() => media.md)
	const lg = computed(() => media.lg)
	const mouse = computed(() => media.mouse)
	const mediaInited = ref(false)

	const sizes = {
		sm: "(min-width: 576px)",
		md: "(min-width: 960px)",
		lg: "(min-width: 1440x)",
		mouse: "(hover: hover)"
	}

	const checkSize = (size) => {
		const val = ref(false)
		const m = window.matchMedia(size)

		try {
			m.addEventListener("change", function () {
				val.value = m.matches
			});
		} catch (e1) {
			try {
				m.addListener((e) => {
					val.value = m.matches
				});
			} catch (e2) {
				console.error(e2)
			}
		}

		val.value = m.matches

		return val
	}

	onMounted(() => {
		Object.keys(sizes).forEach(size => {
			media[size] = checkSize(sizes[size])
		})
		mediaInited.value = true
	})

	return {
		sm,
		md,
		lg,
		mouse,
		mediaInited
	}
}
