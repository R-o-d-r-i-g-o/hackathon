package controller

import (
	"fmt"
	repository "transaction/module/repositories"

	"github.com/gin-gonic/gin"
)

func CreateUser(c *gin.Context) {
	var new repository.UserReferences
	c.Header("Access-Control-Allow-Origin", "*")

	c.BindJSON(&new.User)
	new.AddUserToDatabase()
}

func FindUser(c *gin.Context) {
	var registered repository.UserReferences
	c.Header("Access-Control-Allow-Origin", "*")

	registered.FindUsersInDatabase()
	c.JSON(200, registered.Users)
	fmt.Println(registered.Users)
}

func UploadUser(c *gin.Context) {
	var registered repository.UserReferences
	c.Header("Access-Control-Allow-Origin", "*")

	c.BindJSON(&registered.User)
	registered.UpdateUserInDatabase()
}

func DeleteUser(c *gin.Context) {
	var registered repository.UserReferences
	c.Header("Access-Control-Allow-Origin", "*")

	c.BindJSON(&registered.User)
	registered.DeleteUserInDatabase()

}
