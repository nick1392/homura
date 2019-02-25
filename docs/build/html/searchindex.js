Search.setIndex({docnames:["homura","homura.metrics","homura.modules","homura.modules.functions","homura.utils","homura.vision","homura.vision.data","homura.vision.models","homura.vision.models.classification","homura.vision.models.segmentation","homura.vision.transforms","index","modules"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:55},filenames:["homura.rst","homura.metrics.rst","homura.modules.rst","homura.modules.functions.rst","homura.utils.rst","homura.vision.rst","homura.vision.data.rst","homura.vision.models.rst","homura.vision.models.classification.rst","homura.vision.models.segmentation.rst","homura.vision.transforms.rst","index.rst","modules.rst"],objects:{"":{homura:[0,0,0,"-"]},"homura.callbacks":{AccuracyCallback:[0,1,1,""],Callback:[0,1,1,""],CallbackList:[0,1,1,""],LossCallback:[0,1,1,""],MetricCallback:[0,1,1,""],WeightSave:[0,1,1,""],metric_callback_decorator:[0,4,1,""]},"homura.callbacks.AccuracyCallback":{accuracy:[0,2,1,""]},"homura.callbacks.Callback":{after_all:[0,2,1,""],after_epoch:[0,2,1,""],after_iteration:[0,2,1,""],before_all:[0,2,1,""],before_epoch:[0,2,1,""],before_iteration:[0,2,1,""],close:[0,2,1,""]},"homura.callbacks.CallbackList":{after_all:[0,2,1,""],after_epoch:[0,2,1,""],after_iteration:[0,2,1,""],before_epoch:[0,2,1,""],before_iteration:[0,2,1,""],close:[0,2,1,""]},"homura.callbacks.MetricCallback":{after_epoch:[0,2,1,""],after_iteration:[0,2,1,""],before_epoch:[0,2,1,""],before_iteration:[0,2,1,""],history:[0,3,1,""]},"homura.callbacks.WeightSave":{after_epoch:[0,2,1,""]},"homura.debug":{module_debugger:[0,4,1,""]},"homura.liblog":{disable_default_handler:[0,4,1,""],enable_default_handler:[0,4,1,""],get_logger:[0,4,1,""],get_verb_level:[0,4,1,""],set_file_handler:[0,4,1,""],set_verb_level:[0,4,1,""]},"homura.lr_scheduler":{CosineAnnealingLR:[0,1,1,""],ExponentialLR:[0,1,1,""],LRScheduler:[0,1,1,""],LambdaLR:[0,1,1,""],MultiStepLR:[0,1,1,""],ReduceLROnPlateau:[0,1,1,""],StepLR:[0,1,1,""]},"homura.lr_scheduler.LRScheduler":{scheduler:[0,3,1,""],set_optimizer:[0,2,1,""]},"homura.metrics":{commons:[1,0,0,"-"]},"homura.metrics.commons":{classwise_accuracy:[1,4,1,""],confusion_matrix:[1,4,1,""],f1_score:[1,4,1,""],false_negative:[1,4,1,""],false_positive:[1,4,1,""],precision:[1,4,1,""],recall:[1,4,1,""],specificity:[1,4,1,""],true_negative:[1,4,1,""],true_positive:[1,4,1,""]},"homura.modules":{attention:[2,0,0,"-"],conditional_batchnorm:[2,0,0,"-"],functions:[3,0,0,"-"]},"homura.modules.attention":{KeyValAttention:[2,1,1,""]},"homura.modules.attention.KeyValAttention":{forward:[2,2,1,""]},"homura.modules.conditional_batchnorm":{CategoricalConditionalBatchNorm:[2,1,1,""]},"homura.modules.conditional_batchnorm.CategoricalConditionalBatchNorm":{forward:[2,2,1,""]},"homura.modules.functions":{discretization:[3,0,0,"-"],miscs:[3,0,0,"-"]},"homura.modules.functions.discretization":{gumbel_sigmoid:[3,4,1,""],gumbel_softmax:[3,4,1,""],semantic_hashing:[3,4,1,""],straight_through_estimator:[3,4,1,""]},"homura.modules.functions.miscs":{straight_backprop:[3,4,1,""]},"homura.optim":{ASGD:[0,1,1,""],Adam:[0,1,1,""],Optimizer:[0,1,1,""],RMSProp:[0,1,1,""],SGD:[0,1,1,""]},"homura.optim.Optimizer":{optim:[0,3,1,""],set_model:[0,2,1,""]},"homura.reporters":{LoggerReporter:[0,1,1,""],Reporter:[0,1,1,""],TQDMReporter:[0,1,1,""],TensorboardReporter:[0,1,1,""],VisdomReporter:[0,1,1,""]},"homura.reporters.Reporter":{add_memo:[0,2,1,""],after_all:[0,2,1,""],after_epoch:[0,2,1,""],after_iteration:[0,2,1,""],before_all:[0,2,1,""],before_epoch:[0,2,1,""],before_iteration:[0,2,1,""],close:[0,2,1,""],disable_report_images:[0,2,1,""],disable_report_params:[0,2,1,""],enable_report_images:[0,2,1,""],enable_report_params:[0,2,1,""]},"homura.reproductivity":{set_deterministic:[0,4,1,""],unset_deterministic:[0,4,1,""]},"homura.trainers":{DistributedSupervisedTrainer:[0,1,1,""],SupervisedTrainer:[0,1,1,""],Trainer:[0,3,1,""],TrainerBase:[0,1,1,""]},"homura.trainers.SupervisedTrainer":{iteration:[0,2,1,""]},"homura.trainers.TrainerBase":{epoch:[0,3,1,""],is_train:[0,3,1,""],iteration:[0,2,1,""],override_iteration:[0,2,1,""],register_after_all:[0,2,1,""],register_after_epoch:[0,2,1,""],register_after_iteration:[0,2,1,""],register_before_all:[0,2,1,""],register_before_epoch:[0,2,1,""],register_before_iteration:[0,2,1,""],resume:[0,2,1,""],run:[0,2,1,""],step:[0,3,1,""],test:[0,2,1,""],train:[0,2,1,""]},"homura.utils":{containers:[4,0,0,"-"],environment:[4,0,0,"-"],inferencer:[4,0,0,"-"],miscs:[4,0,0,"-"],reporter_backends:[4,0,0,"-"],runner:[4,0,0,"-"]},"homura.utils.containers":{Map:[4,1,1,""],TensorTuple:[4,1,1,""]},"homura.utils.containers.Map":{copy:[4,2,1,""],deepcopy:[4,2,1,""],keys:[4,2,1,""],to:[4,2,1,""],values:[4,2,1,""]},"homura.utils.containers.TensorTuple":{to:[4,2,1,""]},"homura.utils.inferencer":{Inferencer:[4,1,1,""]},"homura.utils.inferencer.Inferencer":{iteration:[4,2,1,""],load:[4,2,1,""],mode:[4,3,1,""],override_iteration:[4,2,1,""],run:[4,2,1,""],test:[4,2,1,""],update_loss_f:[4,2,1,""]},"homura.utils.miscs":{check_path:[4,4,1,""],get_git_hash:[4,4,1,""]},"homura.utils.reporter_backends":{LoggerWrapper:[4,1,1,""],TQDMWrapper:[4,1,1,""],TensorBoardWrapper:[4,1,1,""],make_dir:[4,4,1,""],save_image:[4,4,1,""],vector_to_dict:[4,4,1,""]},"homura.utils.reporter_backends.LoggerWrapper":{add_histogram:[4,2,1,""],add_image:[4,2,1,""],add_images:[4,2,1,""],add_scalar:[4,2,1,""],add_scalars:[4,2,1,""],add_text:[4,2,1,""]},"homura.utils.reporter_backends.TQDMWrapper":{add_histogram:[4,2,1,""],add_image:[4,2,1,""],add_images:[4,2,1,""],add_scalar:[4,2,1,""],add_scalars:[4,2,1,""],add_text:[4,2,1,""]},"homura.utils.reporter_backends.TensorBoardWrapper":{add_histogram:[4,2,1,""],add_image:[4,2,1,""],add_images:[4,2,1,""],add_scalar:[4,2,1,""],add_scalars:[4,2,1,""],add_text:[4,2,1,""],close:[4,2,1,""]},"homura.utils.runner":{Runner:[4,1,1,""]},"homura.vision":{data:[6,0,0,"-"],models:[7,0,0,"-"],transforms:[10,0,0,"-"]},"homura.vision.data":{custom_dataset:[6,0,0,"-"],folder:[6,0,0,"-"],loaders:[6,0,0,"-"],statistics:[6,0,0,"-"]},"homura.vision.data.custom_dataset":{TransformableSubset:[6,1,1,""],randperm:[6,4,1,""],transformable_random_split:[6,4,1,""]},"homura.vision.data.custom_dataset.TransformableSubset":{update_transforms:[6,2,1,""]},"homura.vision.data.folder":{FolderABC:[6,1,1,""],ImageFolder:[6,1,1,""]},"homura.vision.data.folder.FolderABC":{image_loader:[6,5,1,""]},"homura.vision.data.folder.ImageFolder":{IMG_EXTENSIONS:[6,3,1,""]},"homura.vision.data.loaders":{cifar100_loaders:[6,4,1,""],cifar10_loaders:[6,4,1,""],fashion_mnist_loaders:[6,4,1,""],imagenet_loaders:[6,4,1,""],mnist_loaders:[6,4,1,""]},"homura.vision.data.statistics":{PerChannelStatistics:[6,1,1,""]},"homura.vision.data.statistics.PerChannelStatistics":{estimated:[6,3,1,""],from_batch:[6,2,1,""],from_directory:[6,2,1,""],mean:[6,3,1,""],stdev:[6,3,1,""]},"homura.vision.models":{classification:[8,0,0,"-"],segmentation:[9,0,0,"-"]},"homura.vision.models.classification":{densenet:[8,0,0,"-"],resnet:[8,0,0,"-"],wideresnet:[8,0,0,"-"]},"homura.vision.models.classification.densenet":{CIFARDenseNet:[8,1,1,""],cifar_densenet100:[8,4,1,""]},"homura.vision.models.classification.densenet.CIFARDenseNet":{forward:[8,2,1,""],initialize:[8,2,1,""]},"homura.vision.models.classification.resnet":{PreActResNet:[8,1,1,""],ResNet:[8,1,1,""],preact_resnet110:[8,4,1,""],preact_resnet20:[8,4,1,""],preact_resnet32:[8,4,1,""],preact_resnet56:[8,4,1,""],resnet110:[8,4,1,""],resnet20:[8,4,1,""],resnet32:[8,4,1,""],resnet56:[8,4,1,""]},"homura.vision.models.classification.resnet.PreActResNet":{forward:[8,2,1,""]},"homura.vision.models.classification.resnet.ResNet":{forward:[8,2,1,""],initialize:[8,2,1,""]},"homura.vision.models.classification.wideresnet":{WideBasicModule:[8,1,1,""],WideResNet:[8,1,1,""],wrn28_10:[8,4,1,""],wrn28_2:[8,4,1,""]},"homura.vision.models.classification.wideresnet.WideBasicModule":{forward:[8,2,1,""]},"homura.vision.models.classification.wideresnet.WideResNet":{forward:[8,2,1,""],initialize:[8,2,1,""]},"homura.vision.models.segmentation":{msdnet:[9,0,0,"-"],unet:[9,0,0,"-"]},"homura.vision.models.segmentation.msdnet":{msdnet25:[9,4,1,""],msdnet50:[9,4,1,""]},"homura.vision.models.segmentation.unet":{CustomUNet:[9,1,1,""],unet:[9,4,1,""]},"homura.vision.models.segmentation.unet.CustomUNet":{forward:[9,2,1,""]},"homura.vision.transforms":{erase:[10,0,0,"-"]},"homura.vision.transforms.erase":{RandomErase:[10,1,1,""]},"homura.vision.transforms.erase.RandomErase":{min_ratio:[10,3,1,""]},homura:{callbacks:[0,0,0,"-"],debug:[0,0,0,"-"],liblog:[0,0,0,"-"],lr_scheduler:[0,0,0,"-"],metrics:[1,0,0,"-"],modules:[2,0,0,"-"],optim:[0,0,0,"-"],reporters:[0,0,0,"-"],reproductivity:[0,0,0,"-"],trainers:[0,0,0,"-"],utils:[4,0,0,"-"],vision:[5,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","attribute","Python attribute"],"4":["py","function","Python function"],"5":["py","staticmethod","Python static method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:attribute","4":"py:function","5":"py:staticmethod"},terms:{"44s":0,"abstract":6,"class":[0,1,2,4,6,8,9,10],"default":6,"float":[0,1,2,3,8,10],"function":[0,2,8,9,11],"int":[0,3,4,6,8],"long":1,"return":[0,1,2,3,6],"static":6,"true":[0,1,2,3,4,6],"while":[2,8,9],For:8,The:0,Use:0,Using:0,_batchnorm:2,_dataset:[],_metric:0,_reporter_backend:[],_runner:[],_wrapperbas:[0,4],abc:[0,4],abs:2,accuraci:[0,1],accuracy_test:0,accuracycallback:0,adam:0,add_histogram:4,add_imag:4,add_memo:0,add_scalar:4,add_text:4,addit:0,affin:2,after:0,after_al:0,after_epoch:0,after_iter:0,afterward:[2,8,9],alia:0,all:[0,2,6,8,9],alpha:0,although:[2,8,9],amsgrad:0,apex:0,area_ratio:10,arg:[4,6],arrang:6,artist:2,arxiv:2,asgd:0,aspect_ratio:10,attent:[0,11,12],attribut:4,autograd:6,backend:0,backward:0,base:[0,2,4,6,8,9,10],base_wrapp:0,batch:[2,6],batch_siz:6,batchnorm:2,becaus:0,before_al:0,before_epoch:0,before_iter:0,beta:0,blob:8,block:8,bmp:6,bn_size:8,bool:[0,2,3,4,6],bottleneck:8,bound:6,bxcx:1,calcul:[0,1],call:[2,8,9],callabl:[0,4],callback:[4,11,12],callbacklist:0,can:[0,4],care:[2,8,9],cat:6,categor:2,categori:2,categoricalconditionalbatchnorm:2,center:0,channel:8,check_path:4,cifar100:6,cifar100_load:6,cifar10:6,cifar10_load:6,cifar:[6,8],cifar_densenet100:8,cifardensenet:8,class_to_idx:[],classif:[0,5,6,7],classwise_accuraci:1,close:[0,4],collect:[0,4],com:8,combin:0,common:[0,11,12],compact:8,comput:[2,8,9],condit:2,conditional_batchnorm:[0,11,12],config:9,confus:1,confusion_matrix:1,connect:0,contain:[0,12],content:[11,12],cooldown:0,copi:4,cosineannealinglr:0,cpu:6,creat:0,cuda:[0,6],current:6,custom_dataset:[0,5],customunet:9,cxc:1,dampen:0,data:[0,4,5,8],data_augment:6,data_load:[0,4],data_parallel:0,dataload:[0,4],dataset:[6,8],debug:[11,12],decor:0,deepcopi:4,def:0,defin:[2,8,9],dens:8,densenet:[0,5,7],deprec:0,depth:8,desir:6,determinist:0,devic:[0,4,6],dict:[0,4],dim:[2,3],dimens:1,dis:0,disable_default_handl:0,disable_report_imag:0,disable_report_param:0,discret:[0,2,11],discrimin:0,distribut:[0,6],distributedsupervisedtrain:0,division:8,document:11,doe:0,dog:6,dropout:8,dropout_r:8,dropout_ratio:2,dtype:6,duck:0,dumoulin:2,dure:0,each:8,els:6,enable_default_handl:0,enable_report_imag:0,enable_report_param:0,env:0,environ:[0,12],epoch:0,eps:[0,2],eras:[0,5],erase_prob:10,estim:[3,6],eta_min:0,everi:[0,2,8,9],everyth:0,exampl:6,except:[],exclus:6,expect:1,exponentiallr:0,extens:[],f1_score:1,facebook:8,factor:[0,8],fals:[0,1,2,3,4,6,8],false_neg:1,false_posit:1,fashion_mnist_load:6,faster:6,file:[],final_result:0,find_class:[],fmnist:6,folder:[0,5],folderabc:6,force_download:6,formatt:0,former:[2,8,9],forward:[0,2,8,9],frequenc:0,from:6,from_batch:6,from_directori:6,gamma:0,gao:8,gen:0,gener:[0,6],get_git_hash:4,get_logg:0,get_verb_level:0,github:8,given:[0,4],gloo:0,growth:8,growth_rat:8,gumbel:3,gumbel_sigmoid:3,gumbel_softmax:3,has_allowed_extens:[],hase:[],hash:3,histogram:0,histori:0,homura:11,hook:[2,8,9],howev:0,http:[2,8],idx:4,ignor:[2,8,9],ilsvrc:6,imag:[0,6],image_kei:0,image_load:6,imagefold:6,imagenet:8,imagenet_load:6,img_extens:6,in_plan:8,index:[0,11],indic:6,infer:4,inferenc:[0,12],info:0,init_channel:8,init_method:0,init_paramet:[],initi:8,input:[0,1,2,3,8,9],input_channel:9,instanc:[2,8,9],instead:[0,2,8,9],int64:6,integ:6,intial:[],is_train:[0,3],iter:[0,4,6],jpeg:6,jpg:6,kaim:[],kei:[0,2,4],keyvalattent:2,kudlur:2,kwarg:[0,4,8],labelcorruptedimag:6,lambd:0,lambdalr:0,larg:0,last_epoch:0,latter:[2,8,9],layer:8,layout:6,learn:2,length:6,level:0,liblog:[11,12],librari:11,like:[0,4],limit:0,list:[0,4],liuzhuang13:8,load:[4,6],loader:[0,5],log:[0,4],log_fil:0,logger:[0,4],loggerreport:0,loggerwrapp:4,longtensor:6,loop:0,loss:0,loss_f:[0,4],loss_test:0,losscallback:0,lr_lambda:0,lr_schedul:[11,12],lrschedul:0,lua:8,mai:0,make:0,make_dataset:[],make_dir:4,map:[0,4],mask:2,master:8,matrix:1,mean:6,memo:0,meta:4,method:0,metric:[0,11,12],metric_callback_decor:0,metriccallback:0,mileston:0,min:0,min_lr:0,min_ratio:10,misc:[0,2,11,12],mnist:6,mnist_load:6,mode:[0,4],model:[0,4,5],modifi:3,modul:[11,12],module_debugg:0,momentum:[0,2],move:4,msdnet25:9,msdnet50:9,msdnet:[0,5,7],multipl:8,multisteplr:0,mutablemap:4,n_size:8,name:[0,4],nccl:0,ndarrai:4,need:[0,2,8,9],neg:1,nesterov:0,network:1,new_iter:[0,4],none:[0,2,4,6],normal:2,num_class:[2,8,9],num_featur:2,num_lay:8,num_sampl:6,num_test_sampl:6,num_train_sampl:6,num_work:6,number:[4,6,8],numpi:[0,4],nvidia:0,object:[0,4,6,10],on_memori:6,one:[2,8,9],onli:4,oper:6,optim:[11,12],optim_cl:0,option:[0,1,4,6],org:2,origin:3,out:6,output:[0,1,6,8],overrid:0,overridden:[2,8,9],override_iter:[0,4],packag:[11,12],pad:[6,8],page:11,paper:[2,8],param:1,paramet:[0,1,2,3,6,8],part:0,pass:[2,8,9],path:[0,4,6],pathlib:[4,6],patienc:0,perchannelstatist:6,perform:[2,8,9],permut:6,pgm:6,plane:8,png:6,posit:1,ppm:6,preact_resnet110:8,preact_resnet20:8,preact_resnet32:8,preact_resnet56:8,preactresnet:8,precis:1,properti:0,propos:[2,8],provid:4,queri:2,ram:6,randn:3,random:[0,6],random_r:[],random_se:[],randomcrop:6,randomeras:10,randomhorizontalflip:6,randperm:6,rang:0,rate:8,recal:1,recip:[2,8,9],record:6,reducelronplateau:0,reduct:8,refer:8,reflect:8,regist:[2,8,9],register_after_al:0,register_after_epoch:0,register_after_iter:0,register_before_al:0,register_before_epoch:0,register_before_iter:0,rel:0,reload:6,relu:3,replac:6,report:[11,12],report_freq:0,report_image_freq:0,report_images_freq:0,report_param_freq:0,report_params_freq:0,reporter_backend:[0,12],represent:2,reproduct:[11,12],requires_grad:6,research:11,resnet110:8,resnet20:8,resnet32:8,resnet56:8,resnet:[0,5,7],result:0,resum:0,rmsprop:0,root:6,run:[0,2,4,8,9],runner:[0,12],sampl:6,save:0,save_dir:[0,4],save_freq:0,save_imag:[0,4],save_image_freq:0,save_log:[0,4],save_path:0,scale:2,schdlr_cl:0,schedul:0,score:1,search:11,see:6,seed:0,segment:[0,5,7],semant:3,semantic_hash:3,sequenc:6,set:[0,4,6],set_default_tensor_typ:6,set_determinist:0,set_file_handl:0,set_model:0,set_optim:0,set_tqdm_handl:[],set_verb_level:0,sgd:0,shallow:4,shapeerror:[],shlen:2,should:[2,6,8,9],sigmoid:3,silent:[2,8,9],simpl:6,sinc:[2,8,9],softmax:3,some:0,someth:0,sourc:[0,1,2,3,4,6,8,9,10],space:0,specif:1,statist:[0,5],stdev:6,step:0,step_siz:0,steplr:0,storag:0,store:[4,6],str:[0,4,6],straight:3,straight_backprop:3,straight_backprop_relu:3,straight_through_estim:3,stride:[6,8],style:2,subclass:[2,8,9],submodul:[5,7,11,12],subpackag:[11,12],subscrib:4,subset:6,supervisedtrain:0,t_co:[0,6],t_max:0,take:[2,8,9],target:[0,1],target_transform:6,temp:3,tensor:[0,1,2,3,4,6],tensorboard:0,tensorboardreport:0,tensorboardwrapp:4,tensortupl:4,test:[0,4,6],test_data:0,test_load:6,text:0,them:[2,8,9],thi:[0,2,6,8,9],threshold:0,threshold_mod:0,through:3,tif:6,top:0,torch:[0,1,2,3,4,6,8],torchvis:8,tqdm:0,tqdmreport:0,tqdmwrapper:4,track_running_stat:2,train:[0,6],train_data:0,train_load:6,trainer:[4,11,12],trainerbas:0,transform:[0,5,6],transformable_random_split:6,transformablesubset:6,transit:8,true_neg:1,true_posit:1,tupl:[0,4,6,10],type:[0,6],unet:[0,5,7],union:[0,4,6],unset_determinist:0,updat:0,update_iter:0,update_loss_f:4,update_scheduler_by_epoch:0,update_transform:6,upper:6,use:[0,6,8],use_apex_ddp:0,use_cuda_nonblock:[0,4],use_cudnn_benchmark:[0,4],use_sync_bn:0,used:[0,2],user:0,uses:6,using:0,util:[0,6,12],val:0,val_load:6,val_siz:6,valset:[],valu:[2,4],vector_to_dict:4,verb:[0,4],verbos:0,via:0,view:4,visdomreport:0,vision:[0,11,12],vocabulari:[],vt_co:0,wai:6,want:6,weight:0,weight_decai:0,weightsav:0,welcom:11,where:6,which:8,wide_resnet:[],widebasicmodul:8,widen_factor:8,wideresnet:[0,5,7],wise:1,within:[2,8,9],wrn28_10:8,wrn28_2:8,xxx:6,you:6,zero_init_residu:8},titles:["homura package","homura.metrics package","homura.modules package","homura.modules.functions package","homura.utils package","homura.vision package","homura.vision.data package","homura.vision.models package","homura.vision.models.classification package","homura.vision.models.segmentation package","homura.vision.transforms package","Indices and tables","homura"],titleterms:{"function":3,attent:2,callback:0,cifar:[],classif:8,common:1,conditional_batchnorm:2,contain:4,content:[0,1,2,3,4,5,6,7,8,9,10],custom_dataset:6,data:6,debug:0,densenet:8,discret:3,environ:4,eras:10,except:[],folder:6,homura:[0,1,2,3,4,5,6,7,8,9,10,12],indic:11,inferenc:4,intial:[],liblog:0,loader:6,lr_schedul:0,metric:1,misc:[3,4],model:[7,8,9],modul:[0,1,2,3,4,5,6,7,8,9,10],msdnet:9,optim:0,packag:[0,1,2,3,4,5,6,7,8,9,10],report:0,reporter_backend:4,reproduct:0,resnet:8,runner:4,segment:9,statist:6,submodul:[0,1,2,3,4,6,8,9,10],subpackag:[0,2,5,7],tabl:11,trainer:0,transform:10,unet:9,util:4,vision:[5,6,7,8,9,10],vocabulari:[],wide_resnet:[],wideresnet:8}})