module.exports = {
	type: 'postgres',
	url: process.env.DATABASE_URL,
	synchronize: false,
	logging: false,
	migrations: ['src/modules/database/migrations/*.ts'],
	migrationsTableName: 'migrations',
	entities: ['src/**/*.entity.ts'],
	cli: {
		migrationsDir: 'src/modules/database/migrations',
	},
	// ssl: {
	// 	rejectUnauthorized: false,
	// },
};
