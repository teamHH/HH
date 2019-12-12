var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var user_login_form = require('./routes/user_login_form');
var user_login = require('./routes/user_login');
var user_logout = require('./routes/user_logout');
var homepage = require('./routes/homepage');
var homepage2 = require('./routes/homepage2');
var personal_profile = require('./routes/personal_profile');
var joinActivity= require('./routes/joinActivity');
var joinActivity2= require('./routes/joinActivity2');
var detailAct= require('./routes/detailAct');
var totPost= require('./routes/totPost');
var totPost2= require('./routes/totPost2');
var user_add = require('./routes/user_add');
var user_add_form = require('./routes/user_add_form');
var user_update = require('./routes/user_update');
var act_update = require('./routes/act_update');
var editBio = require('./routes/editBio');
var editAct = require('./routes/editAct');
var editPost = require('./routes/editPost');
var addActivity = require('./routes/addActivity');
var quitAct = require('./routes/quitAct');
var act_quit = require('./routes/act_quit');
var act_delete = require('./routes/act_delete');
var act_delete2 = require('./routes/act_delete2');
var act_delete3 = require('./routes/act_delete3');
var friend_delete = require('./routes/friend_delete');
var deletePost = require('./routes/deletePost');
var deleteFriend = require('./routes/deleteFriend');
var deleteAct = require('./routes/deleteAct');
var activity_add = require('./routes/activity_add');
var comment_add = require('./routes/comment_add');
var comment_add2 = require('./routes/comment_add2');
var post_add = require('./routes/post_add');
var post_add2 = require('./routes/post_add2');
var post_update = require('./routes/post_update');
var post_delete = require('./routes/post_delete');
var post_delete2 = require('./routes/post_delete2');
var mobile_login = require('./routes/mobile_login');
var mobile_query = require('./routes/mobile_query');
var mobile_returnNo = require('./routes/mobile_returnNo');
var mobile_orbit_add = require('./routes/mobile_orbit_add');
var mobile_orbitrecord_add = require('./routes/mobile_orbitrecord_add');
var mobile_update = require('./routes/mobile_update');
var resetPassword = require('./routes/resetPassword');
var confirmPassword = require('./routes/confirmPassword');
var user_resetPassword= require('./routes/user_resetPassword');
var user_confirmPassword= require('./routes/user_confirmPassword');
var forgotPassword = require('./routes/forgotPassword');
var friend_judge = require('./routes/friend_judge');
var friend_add = require('./routes/friend_add');
var friend_invite = require('./routes/friend_invite');
var invite_delete = require('./routes/invite_delete');
var personal_friend = require('./routes/personal_friend');
var personal_other = require('./routes/personal_other');
var personal_other2 = require('./routes/personal_other2');
var like_add = require('./routes/like_add');
var like_add2 = require('./routes/like_add2');
var score_add = require('./routes/score_add');
var activity_join = require('./routes/activity_join');
var typePost = require('./routes/typePost');
var typePersonal = require('./routes/typePersonal');
var typePost2 = require('./routes/typePost2');
var search = require('./routes/search');
var searchM = require('./routes/searchM');
var sactsearch = require('./routes/sactsearch');
var eactsearch = require('./routes/eactsearch');
var sactsearchM = require('./routes/sactsearchM');
var eactsearchM = require('./routes/eactsearchM');
var searchList = require('./routes/searchList');
var searchList2= require('./routes/searchList2');
var comment_delete = require('./routes/comment_delete');
var comment_delete2 = require('./routes/comment_delete2');
var comment_delete3 = require('./routes/comment_delete3');
var manager_login_form = require('./routes/manager_login_form');
var manager_login = require('./routes/manager_login');
var addPublicAct = require('./routes/addPublicAct');
var eactivity_add = require('./routes/eactivity_add');
var postone = require('./routes/postone');
var signin_add = require('./routes/signin_add');

var app = express();
var cors = require('cors');
app.use(cors());
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

var session = require('express-session');
app.use(session({secret: 'HOW健康', cookie: { maxAge: 6000000 },resave:true,saveUninitialized: true}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user/login/form', user_login_form);
app.use('/user/login', user_login);
app.use('/user/logout', user_logout);
app.use('/homepage', homepage);
app.use('/homepage2', homepage2);
app.use('/personal_profile', personal_profile);
app.use('/totPost', totPost);
app.use('/joinActivity', joinActivity);
app.use('/totPost2', totPost2);
app.use('/joinActivity2', joinActivity2);
app.use('/user/add', user_add);
app.use('/user/add/form', user_add_form);
app.use('/user/update', user_update);
app.use('/act/update', act_update);
app.use('/editBio', editBio);
app.use('/editAct', editAct);
app.use('/editPost', editPost);
app.use('/addActivity', addActivity);
app.use('/quitAct',quitAct);
app.use('/deletePost',deletePost);
app.use('/deleteFriend',deleteFriend);
app.use('/deleteAct',deleteAct);
app.use('/act/quit',act_quit);
app.use('/act/delete',act_delete);
app.use('/act/delete2',act_delete2);
app.use('/act/delete3',act_delete3);
app.use('/friend/delete',friend_delete);
app.use('/activity/add', activity_add);
app.use('/post/add', post_add);
app.use('/post/add2', post_add2);
app.use('/comment/add', comment_add);
app.use('/comment/add2', comment_add2);
app.use('/post/delete', post_delete);
app.use('/post/delete2', post_delete2);
app.use('/post/update', post_update);
app.use('/detailAct', detailAct);
app.use('/mobile_login', mobile_login);
app.use('/mobile_query', mobile_query);
app.use('/mobile_returnNo', mobile_returnNo);
app.use('/mobile_orbit_add', mobile_orbit_add);
app.use('/mobile_orbitrecord_add', mobile_orbitrecord_add);
app.use('/mobile_update', mobile_update);
app.use('/resetPassword', resetPassword);
app.use('/confirmPassword', confirmPassword);
app.use('/user_resetPassword', user_resetPassword);
app.use('/user_confirmPassword', user_confirmPassword);
app.use('/forgotPassword', forgotPassword);
app.use('/friend_judge', friend_judge);
app.use('/friend_add', friend_add);
app.use('/friend_invite', friend_invite);
app.use('/invite_delete', invite_delete);
app.use('/personal_friend', personal_friend);
app.use('/personal_other', personal_other);
app.use('/personal_other2', personal_other2);
app.use('/like_add', like_add);
app.use('/like_add2', like_add2);
app.use('/score_add', score_add);
app.use('/activity_join', activity_join);
app.use('/typePost', typePost);
app.use('/typePersonal', typePersonal);
app.use('/typePost2', typePost2);
app.use('/search', search);
app.use('/searchM', searchM);
app.use('/sactsearch', sactsearch);
app.use('/eactsearch', eactsearch);
app.use('/sactsearchM', sactsearchM);
app.use('/eactsearchM', eactsearchM);
app.use('/searchList', searchList);
app.use('/searchList2', searchList2);
app.use('/comment_delete', comment_delete);
app.use('/comment_delete2', comment_delete2);
app.use('/comment_delete3', comment_delete3);
app.use('/manager_login_form', manager_login_form);
app.use('/manager_login', manager_login);
app.use('/addPublicAct', addPublicAct);
app.use('/eactivity_add', eactivity_add);
app.use('/postone', postone);
app.use('/signin_add', signin_add);

app.use(express.static('public/img'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error);
  process.exit(1) // To exit with a 'failure' code
});
module.exports = app;
