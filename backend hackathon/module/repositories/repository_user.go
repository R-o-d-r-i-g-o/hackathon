package repository

import (
	"fmt"
	"transaction/db"
	model "transaction/db/model"
	"transaction/library"
)

type IUserReferences interface {
	AddUserToDatabase() error
	FindUsersInDatabase() error
	UpdateUserInDatabase() error
	DeleteUserInDatabase() error
}

type UserReferences struct {
	IUserReferences
	User  *model.User
	Users *[]model.User
}

func (u UserReferences) AddUserToDatabase() {
	db.GetGormDB().Table(library.TB_USERS).Create(&u.User)
}

func (u *UserReferences) FindUsersInDatabase() {
	fmt.Println(db.GetGormDB().Table(library.TB_USERS).Find(&u.Users).Error)
}

func (u UserReferences) UpdateUserInDatabase() {
	db.GetGormDB().Table(library.TB_USERS).Where("id = ?", u.User.Id).Updates(&u.User)
}

func (u UserReferences) DeleteUserInDatabase() {
	db.GetGormDB().Table(library.TB_USERS).Where("id = ?", u.User.Id).Delete(&u.User)
}
