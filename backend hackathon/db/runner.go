package db

import (
	"fmt"
	"log"
	config "transaction/configs"
	model "transaction/db/model"

	"gorm.io/gorm"
)

var db *gorm.DB

func GetGormDB() *gorm.DB {
	return db
}

func StartDatabase() {
	databaseConfiguration := createDatabaseStringConfig()
	mysql := NewMysql(databaseConfiguration)

	if err := mysql.connect(); err != nil {
		log.Fatal(err)
	}

	loadMigrations(mysql.db)

	db = mysql.db
}

func createDatabaseStringConfig() string {
	databaseStringConfig := fmt.Sprintf(
		"%s:%s@tcp(%s:%s)/%s%s",

		config.Mysql.USER,
		config.Mysql.PASSWORD,
		config.Mysql.HOST,
		config.Mysql.PORT,
		config.Mysql.DB,
		config.Mysql.ADDITIONAL_CONFIGS,
	)

	return databaseStringConfig
}

func loadMigrations(db *gorm.DB) {
	db.AutoMigrate(&model.User{})
}
