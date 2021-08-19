export const categories: AppTypes.Schemas.Category[] = [
	{ id: 1, description: 'Бизнес ланч', name: 'lunch' },
	{ id: 2, description: 'Кесадии', name: 'quesadia' },
	{ id: 3, description: 'Комбо', name: 'combo' },
	{ id: 4, description: 'Горячие блюда', name: 'hot', subCategories: [
			{ id: 14, description: 'Шашлыки', name: 'shashlik' },
			{ id: 15, description: 'Блюда гриль', name: 'grill' },
			{ id: 16, description: 'Стейки', name: 'steak' },
		]
	},
	{ id: 5, description: 'На компанию', name: 'company', subCategories: [
			{ id: 17, description: 'Закуски', name: 'snacks' },
		]
	},
	{ id: 6, description: 'Банкет', name: 'banquet' },
	{ id: 7, description: 'Салаты', name: 'salads', subCategories: [
			{ id: 18, description: 'Поке', name: 'poke' },
		]
	},
	{ id: 8, description: 'Супы', name: 'soups' },
	{ id: 9, description: 'Десерты', name: 'desserts' },
	{ id: 10, description: 'Соусы', name: 'sauces' },
	{ id: 11, description: 'Добавки', name: 'additives' },
	{ id: 12, description: 'Напитки', name: 'beverages' },
	{ id: 13, description: 'Полуфабрикаты', name: 'semimanufactures' },

	// Подкатегории для "Горячие блюда"
	{ id: 14, description: 'Шашлыки', name: 'shashlik' },
	{ id: 15, description: 'Блюда гриль', name: 'grill' },
	{ id: 16, description: 'Стейки', name: 'steak' },

	// Подкатегории для "На компанию"
	{ id: 17, description: 'Закуски', name: 'snacks' },

	// Подкатегории для "Салаты"
	{ id: 18, description: 'Поке', name: 'poke' },
];
