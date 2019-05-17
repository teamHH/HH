/*
PostgreSQL Backup
Database: df8cmfrsupvqc8/public
Backup Time: 2019-05-02 19:45:34
*/

DROP SEQUENCE IF EXISTS "public"."Invite_serno_seq";
DROP SEQUENCE IF EXISTS "public"."activityType_acttypeno_seq";
DROP SEQUENCE IF EXISTS "public"."comments_comno_seq";
DROP SEQUENCE IF EXISTS "public"."eActivity_actNo_seq";
DROP SEQUENCE IF EXISTS "public"."friendType_friendtypeno_seq";
DROP SEQUENCE IF EXISTS "public"."friends_serno_seq";
DROP SEQUENCE IF EXISTS "public"."joinedActivity_act_serno_seq";
DROP SEQUENCE IF EXISTS "public"."likes_likeno_seq";
DROP SEQUENCE IF EXISTS "public"."orbitRecord_orbitrecordno_seq";
DROP SEQUENCE IF EXISTS "public"."orbit_orbitno_seq";
DROP SEQUENCE IF EXISTS "public"."pointRule_ruleNo_seq";
DROP SEQUENCE IF EXISTS "public"."points_serno_seq";
DROP SEQUENCE IF EXISTS "public"."postsType_posttypeno_seq";
DROP SEQUENCE IF EXISTS "public"."posts_postno_seq";
DROP SEQUENCE IF EXISTS "public"."sActivity_actno_seq";
DROP SEQUENCE IF EXISTS "public"."score_scoreNo_seq";
DROP SEQUENCE IF EXISTS "public"."signIn_serno_seq";
DROP SEQUENCE IF EXISTS "public"."testincrement";
DROP TABLE IF EXISTS "public"."Invite";
DROP TABLE IF EXISTS "public"."activityType";
DROP TABLE IF EXISTS "public"."comments";
DROP TABLE IF EXISTS "public"."eActivity";
DROP TABLE IF EXISTS "public"."friendType";
DROP TABLE IF EXISTS "public"."friends";
DROP TABLE IF EXISTS "public"."joinedActivity";
DROP TABLE IF EXISTS "public"."likes";
DROP TABLE IF EXISTS "public"."member";
DROP TABLE IF EXISTS "public"."orbitRecord";
DROP TABLE IF EXISTS "public"."orbit";
DROP TABLE IF EXISTS "public"."pointRule";
DROP TABLE IF EXISTS "public"."points";
DROP TABLE IF EXISTS "public"."postsType";
DROP TABLE IF EXISTS "public"."posts";
DROP TABLE IF EXISTS "public"."sActivity";
DROP TABLE IF EXISTS "public"."score";
DROP TABLE IF EXISTS "public"."signIn";
CREATE SEQUENCE "Invite_serno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "activityType_acttypeno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "comments_comno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "eActivity_actNo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "friendType_friendtypeno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "friends_serno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "joinedActivity_act_serno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "likes_likeno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "orbitRecord_orbitrecordno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "orbit_orbitno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "pointRule_ruleNo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "points_serno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "postsType_posttypeno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "posts_postno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "sActivity_actno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "score_scoreNo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "signIn_serno_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;
CREATE SEQUENCE "testincrement" 
INCREMENT 1
MINVALUE  1
MAXVALUE 999999999999
START 1
CACHE 1;
CREATE TABLE "Invite" (
  "serno" int4 NOT NULL DEFAULT nextval('"Invite_serno_seq"'::regclass),
  "invitememno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "invitedmemno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "conform" char(1) COLLATE "pg_catalog"."default" DEFAULT NULL::bpchar
)
;
ALTER TABLE "Invite" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "Invite"."serno" IS 'Auto';
COMMENT ON COLUMN "Invite"."conform" IS 'Default: Null,
Null:未讀, Y:接受, N:拒絕
';
CREATE TABLE "activityType" (
  "acttypeno" int4 NOT NULL DEFAULT nextval('"activityType_acttypeno_seq"'::regclass),
  "acttype" char(10) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "activityType" OWNER TO "uwsgpumhmbomoj";
CREATE TABLE "comments" (
  "comno" int4 NOT NULL DEFAULT nextval('comments_comno_seq'::regclass),
  "postno" int2 NOT NULL,
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "comtime" timestamp(0) NOT NULL,
  "msg" text COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "comments" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "comments"."comno" IS 'Auto';
COMMENT ON COLUMN "comments"."msg" IS 'Rich text editor';
CREATE TABLE "eActivity" (
  "actNo" int4 NOT NULL DEFAULT nextval('"eActivity_actNo_seq"'::regclass),
  "activity" char(15) COLLATE "pg_catalog"."default" NOT NULL,
  "acttime" timestamp(6) NOT NULL,
  "actaddress" text COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "eActivity" OWNER TO "uwsgpumhmbomoj";
CREATE TABLE "friendType" (
  "friendtypeno" int4 NOT NULL DEFAULT nextval('"friendType_friendtypeno_seq"'::regclass),
  "friendtype" char(10) COLLATE "pg_catalog"."default" NOT NULL,
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "friendType" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "friendType"."friendtypeno" IS 'Auto';
CREATE TABLE "friends" (
  "serno" int4 NOT NULL DEFAULT nextval('friends_serno_seq'::regclass),
  "friendtypeno" int2 NOT NULL,
  "memno_1" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "memno_2" char(30) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "friends" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "friends"."serno" IS 'Auto';
COMMENT ON COLUMN "friends"."memno_1" IS '好友關係會產生2筆紀錄';
CREATE TABLE "joinedActivity" (
  "act_serno" int4 NOT NULL DEFAULT nextval('"joinedActivity_act_serno_seq"'::regclass),
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "actno" int2 NOT NULL,
  "finact" char(1) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "joinedActivity" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "joinedActivity"."act_serno" IS 'Auto';
COMMENT ON COLUMN "joinedActivity"."finact" IS 'Default: N, Y:完成,N:未完成';
CREATE TABLE "likes" (
  "likeno" int4 NOT NULL DEFAULT nextval('likes_likeno_seq'::regclass),
  "postno" int2 NOT NULL,
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "liketime" timestamp(0) NOT NULL
)
;
ALTER TABLE "likes" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "likes"."likeno" IS 'Auto';
COMMENT ON COLUMN "likes"."postno" IS 'postNo、memNo不可重覆';
CREATE TABLE "member" (
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "mempassword" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "displayname" char(15) COLLATE "pg_catalog"."default" NOT NULL,
  "gender" char(1) COLLATE "pg_catalog"."default" NOT NULL,
  "tel" char(10) COLLATE "pg_catalog"."default",
  "birthday" date,
  "manager" char(1) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "member" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "member"."memno" IS 'email';
COMMENT ON COLUMN "member"."gender" IS 'M/F';
COMMENT ON COLUMN "member"."manager" IS 'Default: N, Y:是, N:否';
CREATE TABLE "orbitRecord" (
  "orbitrecordno" int4 NOT NULL DEFAULT nextval('"orbitRecord_orbitrecordno_seq"'::regclass),
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "type" int4 NOT NULL,
  "sportstarttime" timestamp(6) NOT NULL,
  "sportendtime" timestamp(6) NOT NULL
)
;
ALTER TABLE "orbitRecord" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "orbitRecord"."orbitrecordno" IS 'Auto';
CREATE TABLE "orbit" (
  "orbitno" int4 NOT NULL DEFAULT nextval('orbit_orbitno_seq'::regclass),
  "orbitrecordno" int4 NOT NULL,
  "orbitdatetime" timestamp(6) NOT NULL,
  "lat" float4 NOT NULL,
  "lng" float4 NOT NULL
)
;
ALTER TABLE "orbit" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "orbit"."orbitno" IS 'Auto';
CREATE TABLE "pointRule" (
  "ruleNo" int4 NOT NULL DEFAULT nextval('"pointRule_ruleNo_seq"'::regclass),
  "rule" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "msg" text COLLATE "pg_catalog"."default" NOT NULL,
  "point" int2 NOT NULL DEFAULT 0
)
;
ALTER TABLE "pointRule" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "pointRule"."msg" IS 'Rich text editor';
CREATE TABLE "points" (
  "serno" int4 NOT NULL DEFAULT nextval('points_serno_seq'::regclass),
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "pointtime" timestamp(0) NOT NULL,
  "ruleno" int2 NOT NULL
)
;
ALTER TABLE "points" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "points"."serno" IS 'Auto';
COMMENT ON COLUMN "points"."ruleno" IS '以顯示點數新增來源';
CREATE TABLE "postsType" (
  "posttypeno" int4 NOT NULL DEFAULT nextval('"postsType_posttypeno_seq"'::regclass),
  "posttype" char(10) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "postsType" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "postsType"."posttypeno" IS 'Auto';
CREATE TABLE "posts" (
  "postno" int4 NOT NULL DEFAULT nextval('posts_postno_seq'::regclass),
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "posttypeno" int2 NOT NULL,
  "posttime" timestamp(0) NOT NULL,
  "title" char(15) COLLATE "pg_catalog"."default" NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "posts" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "posts"."postno" IS 'Auto';
COMMENT ON COLUMN "posts"."content" IS 'Rich text editor';
CREATE TABLE "sActivity" (
  "actno" int4 NOT NULL DEFAULT nextval('"sActivity_actno_seq"'::regclass),
  "activity" char(15) COLLATE "pg_catalog"."default" NOT NULL,
  "acttypeno" int2 NOT NULL,
  "content" text COLLATE "pg_catalog"."default" NOT NULL,
  "actime" timestamp(6) NOT NULL,
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "sActivity" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "sActivity"."actno" IS 'Auto';
COMMENT ON COLUMN "sActivity"."memno" IS '活動發起者';
CREATE TABLE "score" (
  "scoreNo" int4 NOT NULL DEFAULT nextval('"score_scoreNo_seq"'::regclass),
  "actNo" int2 NOT NULL,
  "memNo" char(30) COLLATE "pg_catalog"."default" NOT NULL,
  "score" int2 NOT NULL
)
;
ALTER TABLE "score" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "score"."scoreNo" IS 'Auto';
COMMENT ON COLUMN "score"."score" IS '評分為1-5分';
CREATE TABLE "signIn" (
  "serno" int4 NOT NULL DEFAULT nextval('"signIn_serno_seq"'::regclass),
  "signdate" date NOT NULL,
  "memno" char(30) COLLATE "pg_catalog"."default" NOT NULL
)
;
ALTER TABLE "signIn" OWNER TO "uwsgpumhmbomoj";
COMMENT ON COLUMN "signIn"."serno" IS 'Auto';
BEGIN;
LOCK TABLE "public"."Invite" IN SHARE MODE;
DELETE FROM "public"."Invite";
INSERT INTO "public"."Invite" ("serno","invitememno","invitedmemno","conform") VALUES (1, '10456004@ntub.edu.tw          ', '10456021@ntub.edu.tw          ', NULL),(2, '10456021@ntub.edu.tw          ', '10456034@ntub.edu.tw          ', 'Y');
COMMIT;
BEGIN;
LOCK TABLE "public"."activityType" IN SHARE MODE;
DELETE FROM "public"."activityType";
INSERT INTO "public"."activityType" ("acttypeno","acttype") VALUES (1, '跑步        '),(2, '騎腳踏車      '),(3, '游泳        ');
COMMIT;
BEGIN;
LOCK TABLE "public"."comments" IN SHARE MODE;
DELETE FROM "public"."comments";
INSERT INTO "public"."comments" ("comno","postno","memno","comtime","msg") VALUES (1, 2, '10456022@ntub.edu.tw          ', '2018-10-20 19:24:12', '我也好想去游泳~~~下次揪一下阿'),(3, 3, '10456034@ntub.edu.tw          ', '2018-10-28 21:33:00', '遛弟是怎樣哈哈哈');
COMMIT;
BEGIN;
LOCK TABLE "public"."eActivity" IN SHARE MODE;
DELETE FROM "public"."eActivity";
INSERT INTO "public"."eActivity" ("actNo","activity","acttime","actaddress","content") VALUES (1, '2019 鹿野馬拉松     ', '2019-03-30 07:00:00', '台東縣鹿野鄉 (GPS導航可定位：台東縣鹿野鄉永安村永嶺路83號旁(武陵綠色隧道，即可找到會場)。', '鹿野馬拉松已經邁入第七屆，感謝這些年來所有跑友對鹿野的大力支持，本屆馬拉松將帶領各位跑友，進入風景佳空氣好的花東縱谷，走訪武陵綠色隧道，跑上鹿野高台，拜訪全國模範社區永安社區，欣賞縱谷新景點二層坪水橋及瑞和火車站。為了喚起大家對於跑馬拉松的初衷，鹿野馬拉松沒有競賽獎金，也沒有超值的紀念品及豐盛的補給品，不過這裡濃濃人情味的補給站及啦啦隊，加上一百分的天然美景及新鮮空氣，另外今年度的馬拉松完賽獎牌將讓你愛不釋手，誠摰邀請您在2019年春天，前來鹿野跑馬拉松及旅遊觀光，讓自己身心靈放個假吧。'),(2, 'PUMA 螢光夜跑臺北站   ', '2019-04-06 16:00:00', '台北市大佳河濱公園', '台北站名額總計12,000人，額滿為止');
COMMIT;
BEGIN;
LOCK TABLE "public"."friendType" IN SHARE MODE;
DELETE FROM "public"."friendType";
INSERT INTO "public"."friendType" ("friendtypeno","friendtype","memno") VALUES (1, '點頭之交      ', '10456004@ntub.edu.tw          '),(2, '摯友        ', '10456021@ntub.edu.tw          ');
COMMIT;
BEGIN;
LOCK TABLE "public"."friends" IN SHARE MODE;
DELETE FROM "public"."friends";
INSERT INTO "public"."friends" ("serno","friendtypeno","memno_1","memno_2") VALUES (1, 2, '10456021@ntub.edu.tw          ', '10456022@ntub.edu.tw          '),(2, 1, '10456004@ntub.edu.tw          ', '10456034@ntub.edu.tw          ');
COMMIT;
BEGIN;
LOCK TABLE "public"."joinedActivity" IN SHARE MODE;
DELETE FROM "public"."joinedActivity";
INSERT INTO "public"."joinedActivity" ("act_serno","memno","actno","finact") VALUES (1, '10456034@ntub.edu.tw          ', 1, 'Y'),(2, '10456021@ntub.edu.tw          ', 2, 'Y');
COMMIT;
BEGIN;
LOCK TABLE "public"."likes" IN SHARE MODE;
DELETE FROM "public"."likes";
INSERT INTO "public"."likes" ("likeno","postno","memno","liketime") VALUES (1, 2, '10456022@ntub.edu.tw          ', '2018-10-20 19:22:12'),(2, 3, '10456021@ntub.edu.tw          ', '2018-10-28 18:15:32');
COMMIT;
BEGIN;
LOCK TABLE "public"."member" IN SHARE MODE;
DELETE FROM "public"."member";
INSERT INTO "public"."member" ("memno","mempassword","displayname","gender","tel","birthday","manager") VALUES ('10456004@ntub.edu.tw          ', '2333njivw                     ', '劉小安            ', 'M', '0943592345', '2018-10-28', 'Y'),('10456021@ntub.edu.tw          ', 'qwer4321                      ', '郭小于            ', 'F', '          ', '2000-08-27', 'N'),('10456022@ntub.edu.tw          ', '5678iuyt                      ', '張小婷            ', 'F', '0987654321', '2000-06-30', 'Y'),('10456034@ntub.edu.tw          ', 'dnvjkeg3oi                    ', '陳小臻            ', 'F', '0912484352', '1999-09-15', 'N');
COMMIT;
BEGIN;
LOCK TABLE "public"."orbitRecord" IN SHARE MODE;
DELETE FROM "public"."orbitRecord";
COMMIT;
BEGIN;
LOCK TABLE "public"."orbit" IN SHARE MODE;
DELETE FROM "public"."orbit";
COMMIT;
BEGIN;
LOCK TABLE "public"."pointRule" IN SHARE MODE;
DELETE FROM "public"."pointRule";
INSERT INTO "public"."pointRule" ("ruleNo","rule","msg","point") VALUES (1, '文章字數                          ', '字數超過100字 得10點', 10),(2, '文章按讚                          ', '文章按鑽超過10個 得10點', 10),(3, '文章按讚                          ', '文章按鑽超過20個 得20點', 20),(4, '文章按讚                          ', '文章按鑽超過30個 得30點', 30),(5, '文章字數                          ', '字數超過200字 得20點', 20),(6, '文章字數                          ', '字數超過300字 得30點', 30),(7, '參加活動                          ', '每參加一個活動 得30點', 30),(8, '參加活動                          ', '總參加活動超過5個 得30點', 30);
COMMIT;
BEGIN;
LOCK TABLE "public"."points" IN SHARE MODE;
DELETE FROM "public"."points";
INSERT INTO "public"."points" ("serno","memno","pointtime","ruleno") VALUES (1, '10456034@ntub.edu.tw          ', '2018-10-29 00:00:40', 1),(2, '10456004@ntub.edu.tw          ', '2018-11-04 18:01:10', 4),(3, '10456021@ntub.edu.tw          ', '2018-11-04 18:05:15', 6),(4, '10456022@ntub.edu.tw          ', '2018-11-05 16:42:11', 8);
COMMIT;
BEGIN;
LOCK TABLE "public"."postsType" IN SHARE MODE;
DELETE FROM "public"."postsType";
INSERT INTO "public"."postsType" ("posttypeno","posttype") VALUES (1, '運動        '),(2, '休閒        ');
COMMIT;
BEGIN;
LOCK TABLE "public"."posts" IN SHARE MODE;
DELETE FROM "public"."posts";
INSERT INTO "public"."posts" ("postno","memno","posttypeno","posttime","title","content") VALUES (2, '10456034@ntub.edu.tw          ', 1, '2018-10-20 17:09:48', '心情小記           ', '今天趁有空就趕快去游泳了，不怎麼休息的游1.5k真累!'),(3, '10456022@ntub.edu.tw          ', 2, '2018-10-28 17:12:18', '遛弟             ', '天氣超好的，帶我地去公園玩。');
COMMIT;
BEGIN;
LOCK TABLE "public"."sActivity" IN SHARE MODE;
DELETE FROM "public"."sActivity";
INSERT INTO "public"."sActivity" ("actno","activity","acttypeno","content","actime","memno") VALUES (1, '一起挑戰跑10k       ', 1, '地點:河濱公園', '2018-10-28 15:30:46', '10456034@ntub.edu.tw          '),(2, '騎自行車           ', 2, '不論你現在在哪，用ubike一起繞台北運動一下吧!', '2018-11-02 18:00:00', '10456022@ntub.edu.tw          ');
COMMIT;
BEGIN;
LOCK TABLE "public"."score" IN SHARE MODE;
DELETE FROM "public"."score";
INSERT INTO "public"."score" ("scoreNo","actNo","memNo","score") VALUES (1, 2, '10456021@ntub.edu.tw          ', 4),(2, 1, '10456004@ntub.edu.tw          ', 5);
COMMIT;
BEGIN;
LOCK TABLE "public"."signIn" IN SHARE MODE;
DELETE FROM "public"."signIn";
INSERT INTO "public"."signIn" ("serno","signdate","memno") VALUES (1, '2018-11-01', '10456021@ntub.edu.tw          '),(2, '2018-11-01', '10456022@ntub.edu.tw          ');
COMMIT;
ALTER TABLE "Invite" ADD CONSTRAINT "Invite_pkey" PRIMARY KEY ("serno");
ALTER TABLE "activityType" ADD CONSTRAINT "activityType_pkey" PRIMARY KEY ("acttypeno");
ALTER TABLE "comments" ADD CONSTRAINT "Comments_pkey" PRIMARY KEY ("comno");
ALTER TABLE "eActivity" ADD CONSTRAINT "eActivity_pkey" PRIMARY KEY ("actNo");
ALTER TABLE "friendType" ADD CONSTRAINT "friendType_pkey" PRIMARY KEY ("friendtypeno");
ALTER TABLE "friends" ADD CONSTRAINT "Friends_pkey" PRIMARY KEY ("serno");
ALTER TABLE "joinedActivity" ADD CONSTRAINT "joinedActivity_pkey" PRIMARY KEY ("act_serno");
ALTER TABLE "likes" ADD CONSTRAINT "Likes_pkey" PRIMARY KEY ("likeno");
ALTER TABLE "member" ADD CONSTRAINT "Member_pkey" PRIMARY KEY ("memno");
ALTER TABLE "orbitRecord" ADD CONSTRAINT "orbitRecord_pkey" PRIMARY KEY ("orbitrecordno");
ALTER TABLE "orbit" ADD CONSTRAINT "orbit_pkey" PRIMARY KEY ("orbitno");
ALTER TABLE "pointRule" ADD CONSTRAINT "pointRule_pkey" PRIMARY KEY ("ruleNo");
ALTER TABLE "points" ADD CONSTRAINT "Points_pkey" PRIMARY KEY ("serno");
ALTER TABLE "postsType" ADD CONSTRAINT "poststype_pkey" PRIMARY KEY ("posttypeno");
ALTER TABLE "posts" ADD CONSTRAINT "posts_pkey" PRIMARY KEY ("postno");
ALTER TABLE "sActivity" ADD CONSTRAINT "Activity_pkey" PRIMARY KEY ("actno");
ALTER TABLE "score" ADD CONSTRAINT "Score_pkey" PRIMARY KEY ("scoreNo");
ALTER TABLE "signIn" ADD CONSTRAINT "signIn_pkey" PRIMARY KEY ("serno");
ALTER TABLE "Invite" ADD CONSTRAINT "invitedmemno" FOREIGN KEY ("invitedmemno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "Invite" ADD CONSTRAINT "invitememno" FOREIGN KEY ("invitememno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "comments" ADD CONSTRAINT "memno3" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "comments" ADD CONSTRAINT "postno" FOREIGN KEY ("postno") REFERENCES "public"."posts" ("postno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "friendType" ADD CONSTRAINT "memNo7" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "friends" ADD CONSTRAINT "friendtypeno" FOREIGN KEY ("friendtypeno") REFERENCES "public"."friendType" ("friendtypeno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "friends" ADD CONSTRAINT "memno5" FOREIGN KEY ("memno_1") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "friends" ADD CONSTRAINT "memno6" FOREIGN KEY ("memno_2") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "joinedActivity" ADD CONSTRAINT "actno" FOREIGN KEY ("actno") REFERENCES "public"."sActivity" ("actno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "joinedActivity" ADD CONSTRAINT "memNo10" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "likes" ADD CONSTRAINT "memno4" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "likes" ADD CONSTRAINT "postNo" FOREIGN KEY ("postno") REFERENCES "public"."posts" ("postno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "orbitRecord" ADD CONSTRAINT "memno13" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "orbit" ADD CONSTRAINT "orbitrecordno1" FOREIGN KEY ("orbitrecordno") REFERENCES "public"."orbitRecord" ("orbitrecordno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "points" ADD CONSTRAINT "memno1" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "points" ADD CONSTRAINT "ruleno" FOREIGN KEY ("ruleno") REFERENCES "public"."pointRule" ("ruleNo") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "posts" ADD CONSTRAINT "memno2" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "posts" ADD CONSTRAINT "posttypeno" FOREIGN KEY ("posttypeno") REFERENCES "public"."postsType" ("posttypeno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "sActivity" ADD CONSTRAINT "acttypeno" FOREIGN KEY ("acttypeno") REFERENCES "public"."activityType" ("acttypeno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "sActivity" ADD CONSTRAINT "memno9" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "score" ADD CONSTRAINT "actno" FOREIGN KEY ("actNo") REFERENCES "public"."sActivity" ("actno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "score" ADD CONSTRAINT "memno12" FOREIGN KEY ("memNo") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER TABLE "signIn" ADD CONSTRAINT "memno8" FOREIGN KEY ("memno") REFERENCES "public"."member" ("memno") ON DELETE RESTRICT ON UPDATE RESTRICT;
ALTER SEQUENCE "Invite_serno_seq"
OWNED BY "Invite"."serno";
SELECT setval('"Invite_serno_seq"', 3, true);
ALTER SEQUENCE "Invite_serno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "activityType_acttypeno_seq"
OWNED BY "activityType"."acttypeno";
SELECT setval('"activityType_acttypeno_seq"', 4, true);
ALTER SEQUENCE "activityType_acttypeno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "comments_comno_seq"
OWNED BY "comments"."comno";
SELECT setval('"comments_comno_seq"', 4, true);
ALTER SEQUENCE "comments_comno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "eActivity_actNo_seq"
OWNED BY "eActivity"."actNo";
SELECT setval('"eActivity_actNo_seq"', 3, true);
ALTER SEQUENCE "eActivity_actNo_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "friendType_friendtypeno_seq"
OWNED BY "friendType"."friendtypeno";
SELECT setval('"friendType_friendtypeno_seq"', 3, true);
ALTER SEQUENCE "friendType_friendtypeno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "friends_serno_seq"
OWNED BY "friends"."serno";
SELECT setval('"friends_serno_seq"', 3, true);
ALTER SEQUENCE "friends_serno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "joinedActivity_act_serno_seq"
OWNED BY "joinedActivity"."act_serno";
SELECT setval('"joinedActivity_act_serno_seq"', 3, true);
ALTER SEQUENCE "joinedActivity_act_serno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "likes_likeno_seq"
OWNED BY "likes"."likeno";
SELECT setval('"likes_likeno_seq"', 3, true);
ALTER SEQUENCE "likes_likeno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "orbitRecord_orbitrecordno_seq"
OWNED BY "orbitRecord"."orbitrecordno";
SELECT setval('"orbitRecord_orbitrecordno_seq"', 2, false);
ALTER SEQUENCE "orbitRecord_orbitrecordno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "orbit_orbitno_seq"
OWNED BY "orbit"."orbitno";
SELECT setval('"orbit_orbitno_seq"', 2, false);
ALTER SEQUENCE "orbit_orbitno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "pointRule_ruleNo_seq"
OWNED BY "pointRule"."ruleNo";
SELECT setval('"pointRule_ruleNo_seq"', 9, true);
ALTER SEQUENCE "pointRule_ruleNo_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "points_serno_seq"
OWNED BY "points"."serno";
SELECT setval('"points_serno_seq"', 5, true);
ALTER SEQUENCE "points_serno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "postsType_posttypeno_seq"
OWNED BY "postsType"."posttypeno";
SELECT setval('"postsType_posttypeno_seq"', 4, true);
ALTER SEQUENCE "postsType_posttypeno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "posts_postno_seq"
OWNED BY "posts"."postno";
SELECT setval('"posts_postno_seq"', 4, true);
ALTER SEQUENCE "posts_postno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "sActivity_actno_seq"
OWNED BY "sActivity"."actno";
SELECT setval('"sActivity_actno_seq"', 3, true);
ALTER SEQUENCE "sActivity_actno_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "score_scoreNo_seq"
OWNED BY "score"."scoreNo";
SELECT setval('"score_scoreNo_seq"', 3, true);
ALTER SEQUENCE "score_scoreNo_seq" OWNER TO "uwsgpumhmbomoj";
ALTER SEQUENCE "signIn_serno_seq"
OWNED BY "signIn"."serno";
SELECT setval('"signIn_serno_seq"', 3, true);
ALTER SEQUENCE "signIn_serno_seq" OWNER TO "uwsgpumhmbomoj";
SELECT setval('"testincrement"', 12, true);
ALTER SEQUENCE "testincrement" OWNER TO "uwsgpumhmbomoj";
