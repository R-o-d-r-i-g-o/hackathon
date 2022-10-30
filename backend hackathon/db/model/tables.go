package model

import "transaction/library"

type User struct {
	Id       int    `json:"id"`
	Nome     string `json:"nome"     gorm:"column:id;      primaryKey;"`
	Cnpj     string `json:"cnpj"     gorm:"column:nome"`
	Crc      string `json:"crc"      gorm:"column:cnpj"`
	Email    string `json:"email"    gorm:"column:email"`
	Whatsapp string `json:"whatsapp" gorm:"column:whatsapp"`
}

type Tabler interface {
	TableName() string
}

// ---------------------------------< Methods to name database tables >--------------------------------- \\

func (User) TableName() string {
	return library.TB_USERS
}
