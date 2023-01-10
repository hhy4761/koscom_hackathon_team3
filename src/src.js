/**
 * @api {post} /apis/checkId Verify that the entered ID is duplicated.
 * @apiName CheckId
 * @apiGroup User
 * 
 * @apiParam {String} id id should be unique.
 * 
 * @apiSuccess {Boolean} success 
 * @apiSuccess {String} message
 * 
 * @apiError IdOverlap id is overlapped.
 */

/**
 * @api {post} /apis/checkNickname Verify that the entered nickname is duplicated.
 * @apiName CheckNickname
 * @apiGroup User
 * 
 * @apiParam {String} nickname nickname should be unique.
 * 
 * @apiSuccess {Boolean} success 
 * @apiSuccess {String} message
 * 
 * @apiError NicknameOverlap nickname is overlapped.
 */

/**
 * @api {get} /apis/checkLogin Check User Login 
 * @apiName CheckLogin
 * @apiGroup User
 * 
 * @apiSuccess {Boolean} success 
 * @apiSuccess {String} message
 * 
 */


/**
 * @api {post} /apis/register Register User.
 * @apiName UserRegister
 * @apiGroup User
 * 
 * @apiParam {String} id user Id
 * @apiParam {String} nickname User nickname.
 * @apiParam {String} isStudent Determining whether user are a univ student or not
 * @apiParam {String} password User password
 * @apiParam {String} name User name.
 * @apiParam {String} birthday User birthday.
 * @apiParam {String} univ User univ.
 * @apiParam {String} major User major
 * 
 * @apiSuccess {String} message
 * 
 */

/**
 * @api {post} /apis/login Login
 * @apiName userLogin
 * @apiGroup User
 * 
 * @apiParam {String} id user Id
 * @apiParam {String} password User password
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message 
 * 
 * @apiError LoginFail It dose not match User information in DB. 
 */

/**
 * @api {get} /apis/logout Logout.
 * @apiName UserLogout
 * @apiGroup User
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 */

/**
 * @api {get} /apis/listBoard List up all of board.
 * @apiName ListBoard
 * @apiGroup Board
 * 
 * @apiSuccess {Object} result ALl of board.
 * 
 */

/**
 * @api {post} /apis/postBoard Post board.
 * @apiName PostBoard
 * @apiGroup Board
 * 
 * @apiParam {String} title Board title
 * @apiParam {String} type Board type
 * @apiParam {String} content Board content
 * @apiParam {String} user_id writer
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {Int} board_id
 * @apiSuccess {String} message
 * 
 * 
 */

/**
 * @api {get} /apis/getBoard/:id Get Board by using board id.
 * @apiName GetBoard
 * @apiGroup Board
 * 
 * @apiParam {Int} id Board Id
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object} board data
 * 
 */

/**
 * @api {put} /apis/putBoard/:id Update Board by using board id
 * @apiName PutBoard
 * @apiGroup Board
 * 
 * @apiParam {Int} id Board Id
 * @apiParam {String} title Board title.
 * @apiParam {String} content Board content
 * @apiParam {String} type Board type
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 */

/**
 * @api {delete} /apis/deleteBoard/:id Delete Board by using board id
 * @apiName DeleteBoard
 * @apiGroup Board
 * 
 * @apiParam {Int} id Board Id
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 */

/**
 * @api {post} /apis/postComment/:board_id Post comment.
 * @apiName PostComment
 * @apiGroup Comment
 * 
 * @apiParam {String} comment_content comment content
 * @apiParam {String} user_id Writer information
 * @apiParam {Int} board_id Board id
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 * 
 */

/**
 * @api {get} /apis/getComment/:board_id Get the comments written on the board id.
 * @apiName GetComment
 * @apiGroup Comment
 * 
 * @apiParam {Int} id Board Id
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object} comment data in board id
 * 
 */

/**
 * @api {put} /apis/putComment/:comment_id Update comment by using comment id
 * @apiName PutComment
 * @apiGroup Comment
 * 
 * @apiParam {Int} id Comment Id
 * @apiParam {String} comment_content Comment content
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 */

/**
 * @api {delete} /apis/deleteComment/:comment_id Delete comment by using comment id
 * @apiName DeleteComment
 * @apiGroup Comment
 * 
 * @apiParam {Int} id Comment Id
 * 
 * @apiSuccess {Boolean} success
 * @apiSuccess {String} message
 * 
 */