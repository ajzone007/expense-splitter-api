/* jshint indent: 2 */

export default (sequelize, DataTypes) =>{
	return sequelize.define('Group_users', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		group_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'groups',
				key: 'id'
			}
		},
		user_id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			references: {
				model: 'users',
				key: 'id'
			}
		},
		created: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		updated: {
			type: DataTypes.TIME,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		deleted: {
			type: DataTypes.INTEGER(1),
			allowNull: true,
			defaultValue: '0'
		}
	}, {
		tableName: 'group_users'
	});
};
