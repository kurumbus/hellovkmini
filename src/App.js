import React, {Component} from 'react';
import {
    Avatar,
    Banner,
    Button,
    Card,
    CardGrid,
    Div,
    Group,
    Header,
    Link,
    ModalPage,
    ModalPageHeader,
    ModalRoot,
    Panel,
    PanelHeader,
    PanelHeaderContent, Placeholder,
    platform,
    RichCell,
    Root, SimpleCell,
    Spinner,
    View
} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';
import Dropzone from "react-dropzone";
import request from "superagent";
import SimpleExample from "./components/SimpleExample";
import './css/style.css'
import Icon28HelpOutline from '@vkontakte/icons/dist/28/help_outline';

const MODAL_PROFILE_PHOTOS = 'modal_profile_photos';
const MODAL_ALBUMS = 'modal_albums';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = App.getInitState();
    }

    static getInitState() {
        return {
            activePanel: 'mainPanel',
            albums: [],
            pagesWithMatchingImages: [],
            webEntities: [],
            showSpinner: false,
            visuallySimilarImages: [],
            landmarks: [],
            slideIndex: 0,
            displayResultsMode: false,
            preview: null,
            photos: {},
            profilePhotos: [],
            activeModal: null,
            modalHistory: [],
            access_token: null,
            status: null,
        };
    }

    render() {
        // const osname = platform();
        const modal = (
            <ModalRoot
                activeModal={this.state.activeModal}
            >
                <ModalPage
                    dynamicContentHeight
                    settlingHeight={80}
                    id={MODAL_PROFILE_PHOTOS}
                    onClose={() => this.setState({activeModal: null})}
                    header={
                        <ModalPageHeader>
                            Выберите фото
                        </ModalPageHeader>
                    }
                >
                    <Div  style={{minHeight:1200}}>
                        {
                            this.state.profilePhotos.length  == 0 &&
                            <Div>
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <Spinner size="large" style={{ marginTop: 200 }} />
                                </div>
                            </Div>
                        }
                        {
                            this.state.profilePhotos.length >0 &&
                            <Div>
                                {
                                    this.state.profilePhotos.map(img =>
                                        <img alt=""
                                             onClick={() => {this.selectPhoto(img.sizes[2].url)}}
                                             src={img.sizes[2].url}
                                             key={img.sizes[2].url}
                                             style={{width: '100%'}}
                                             onerror="this.style.display='none'"
                                        />
                                    )
                                }
                            </Div>
                        }
                    </Div>
                </ModalPage>
                <ModalPage
                    dynamicContentHeight
                    settlingHeight={80}
                    id={MODAL_ALBUMS}
                    onClose={() => this.setState({activeModal: null})}
                    header={
                        <ModalPageHeader>
                            Выберите альбом
                        </ModalPageHeader>
                    }
                    style={{minHeight:1200}}
                >
                    {
                        this.state.albums.length  == 0 &&
                        <Div>
                            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                <Spinner size="large" style={{ marginTop: 200 }} />
                            </div>
                        </Div>
                    }
                    {
                        this.state.albums.length >0 &&
                        <Div style={{borderWidth: 1}}>
                            {
                                this.state.albums.map(album =>

                                    /*  <Card size="m">
                                          <img alt=""
                                               onClick={() => {
                                               }}
                                               style={{height: '80%'}}
                                               src={album.thumb_src}

                                               onError="this.style.display='none'"
                                          />
                                      </Card>*/

                                    <SimpleCell onClick={() => {this.setActiveAlbum(album)}} key={album.thumb_src} before={<Avatar size={48} mode="image" src={album.thumb_src} />}>
                                        {album.title}
                                    </SimpleCell>
                                )
                            }
                        </Div>
                    }
                </ModalPage>
            </ModalRoot>
        );


        return (
            <Root activeView="mainView" modal={modal}>
                <View id="mainView" activePanel={this.state.activePanel}>
                    <Panel id="mainPanel">
                        <PanelHeader>
                            <PanelHeaderContent
                                status="места и приедметы"
                            >
                                Распознавание
                            </PanelHeaderContent>
                        </PanelHeader>
                        {
                            ! this.state.displayResultsMode &&
                            <Group>
                                {/* <Dropzone onDrop={this.onDropFiles()} accept="image/jpeg,image/jpg,image/png">
                                    {({getRootProps, getInputProps}) => (
                                        <section>
                                            <Banner {...getRootProps()}
                                                    mode="image"
                                                    size="m"
                                                    header="Выберите файл"
                                                    subheader={<span>для распознавания</span>}
                                                    background={
                                                        <Div
                                                            style={{
                                                                backgroundColor: '#5b9be6',
                                                                backgroundImage: 'url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)',
                                                                backgroundPosition: 'right bottom',
                                                                backgroundSize: '102%',
                                                                backgroundRepeat: 'no-repeat',
                                                            }}
                                                        >
                                                            <input {...getInputProps()} />
                                                        </Div>
                                                    }
                                                    actions={<Button mode="overlay_outline" size="l" style={{marginTop: 10}}>Выбрать</Button>}
                                            />
                                        </section>
                                    )}
                                </Dropzone>*/}
                               <Div>
                                   <Button mode={"secondary"} size="xl">
                                       <label htmlFor="upload">
                                        Выбрать файл с телефона
                                        <input type="file"
                                               id="upload"
                                               onChange={ (e) => this.onDropFiles(e.target.files[0])}
                                               style={{display:"none"}}/>
                                       </label>
                                   </Button>
                               </Div>
                                <Div>
                                    <Button onClick={() => this.selectProfilePhoto()} mode={"secondary"} size="xl">
                                        Выбрать фото из профиля
                                    </Button>
                                </Div>
                                <Div>
                                    <Button onClick={() => this.selectWallPhoto()} mode={"secondary"} size="xl">
                                        Выбрать фото со стены
                                    </Button>
                                </Div>
                                <Div>
                                    <Button onClick={() => this.selectAlbumPhoto()} mode={"secondary"} size="xl">
                                        Выбрать фото из альбома
                                    </Button>
                                </Div>
                               {/* <Div>
                                    {JSON.stringify(this.state.status)}
                                </Div>*/}
                                {
                                    this.state.error &&
                                    <Div>
                                        {this.state.error}
                                    </Div>
                                }
                                <Placeholder
                                    icon={<Icon28HelpOutline />}
                                >
                                    Приложение распознаёт места и предметы с помощью искусственного интеллекта.<br/>
                                    Находит местоположение, ключевые слова, полезную информацию и ссылки.

                                </Placeholder>
                            </Group>
                        }
                        {
                            this.state.displayResultsMode &&
                            <Group>
                                <Banner mode="image"
                                        size="m"
                                        header={<Div></Div>}
                                        subheader=""
                                        background={
                                            <div
                                                style={{
                                                    backgroundColor: '#5b9be6',
                                                    backgroundImage: 'url('+this.state.preview+')',
                                                    backgroundPosition: 'center center',
                                                    backgroundSize: 'cover',
                                                    backgroundRepeat: 'no-repeat',
                                                }}
                                            />
                                        }
                                        actions={<Button mode="secondary_overlay" size="l" onClick={() => this._refresh()}>Сбросить</Button>}
                                />
                            </Group>
                        }
                        {
                            this.state.showSpinner && (
                                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                                    <Spinner size="large" style={{ marginTop: 20 }} />
                                </div>
                            )
                        }
                        {
                            this.state.landmarks.length > 0 &&
                            <Group header={<Header mode="secondary">Места на фотографии:</Header>} style={{marginTop: 20}}>
                                {
                                    this.state.landmarks.map((landmark, i) => {
                                        return (
                                            <Div style={{marginVertical: 20}} key={JSON.stringify(landmark)}>
                                                <Card mode="shadow">
                                                    <Div>{landmark.title}</Div>
                                                    { landmark.locations.length > 0 &&
                                                    <SimpleExample lat={landmark.locations[0].latitude}
                                                                   lng={landmark.locations[0].longitude}
                                                    />
                                                    }
                                                    { landmark.wiki &&
                                                    <Group header={/*<Header mode="secondary"><Avatar size={16} /></Header>*/
                                                        <SimpleCell
                                                            before={<Avatar size={28} src={require('./images/wiki.svg')} />}
                                                        >
                                                            Результаты из Википедии
                                                        </SimpleCell>}>
                                                        {
                                                            landmark.wiki.map(article => {
                                                                return (
                                                                    <Card mode="outline" key={JSON.stringify(article)}>
                                                                        <RichCell
                                                                            disabled
                                                                            multiline
                                                                            before={<Avatar size={72} mode="image" src={this.getWikiImage(article)} />}
                                                                            caption={article.extract}
                                                                            actions={
                                                                                <React.Fragment>
                                                                                    <Link href={"https://en.wikipedia.org/wiki/"+article.title} target="_blank">
                                                                                        <Button mode="secondary">Открыть</Button>
                                                                                    </Link>
                                                                                </React.Fragment>
                                                                            }
                                                                        >
                                                                            {article.title}
                                                                        </RichCell>
                                                                    </Card>
                                                                )
                                                            })
                                                        }
                                                    </Group>
                                                    }
                                                </Card>
                                            </Div>
                                        )
                                    })
                                }
                            </Group>
                        }
                        {
                            this.state.webEntities.length > 0 &&
                            <Group  header={<Header mode="secondary">Ключевые слова:</Header>}>
                                <Div style={{marginVertical: 20}}>
                                    <Card mode="shadow">
                                        <Div>
                                            {
                                                this.state.webEntities.join(', ')
                                            }
                                        </Div>
                                        <Div>
                                            <Button mode="secondary" onClick={() => {this.translateWebEntities()}}>Перевести</Button>
                                        </Div>
                                    </Card>
                                </Div>
                            </Group>
                        }
                        {
                            this.state.pagesWithMatchingImages.length > 0 &&
                            <Group header={<Header mode="secondary">Связанные ссылки:</Header>}>
                                {
                                    this.state.pagesWithMatchingImages.map(page =>
                                        <RichCell
                                            key={JSON.stringify(page)}
                                            disabled
                                            multiline
                                            before={<Avatar size={72} mode="image" src={this.getPageImage(page)}/>}
                                            actions={
                                                <React.Fragment>
                                                    <Link href={page.url} target="_blank">
                                                        <Button mode="secondary">
                                                            Открыть
                                                        </Button>
                                                    </Link>
                                                </React.Fragment>
                                            }
                                        >
                                            {page.page_title}
                                        </RichCell>
                                    )
                                }
                            </Group>
                        }

                        {
                            this.state.visuallySimilarImages.length > 0 &&
                            <Group header={<Header mode="secondary">Похожие картинки:</Header>}>
                                <Div>
                                    {
                                        this.state.visuallySimilarImages.map(image =>
                                            <img alt=""
                                                 src={image}
                                                 key={image}
                                                 style={{width: '100%'}}
                                                 onerror="this.style.display='none'"
                                            />
                                        )
                                    }
                                </Div>
                            </Group>
                        }

                    </Panel>
                </View>
            </Root>
        );
    }

    onDropFiles(f) {
        let files = [f];
        let _this = this;
        _this.setState({
            showSpinner: true, status: typeof files, pagesWithMatchingImages: [], webEntities: [],
            visuallySimilarImages: [], slideIndex: 0, landmarks: [], displayResultsMode: false, preview: null,
        });
        const req = request.post('https://ocr.kurumbus.com/api/web');
        files.forEach(file => {
            req.attach('file', file);
        });
        req.then(res => {

            _this.setState({
                pagesWithMatchingImages: res.body.pages_with_matching_images ?? [],
                webEntities: res.body.web_entities ?? [],
                landmarks: res.body.landmarks ?? [],
                visuallySimilarImages: res.body.visually_similar_images ?? [],
                showSpinner: false, displayResultsMode: true, preview: res.body.file_url
            });
        });
    }

    translateWebEntities() {
        const _this = this;
        let req = request.post('https://ocr.kurumbus.com/api/translate')
            .send({ "text":  this.state.webEntities.join(', ')});
        req.then(res => {
            _this.setState({
                webEntities: res.body.text.split(',') ?? [],
            });
        });
    }

    getPageImage(page) {
        if (page.partial_matching_images && page.partial_matching_images.length > 0) {
            return  page.partial_matching_images[0].url;
        }

        if (page.full_matching_images && page.full_matching_images.length > 0) {
            return  page.full_matching_images[0].url;
        }
        return require('./images/wiki.svg')
    }

    getWikiImage(article) {
        if (article && article.thumbnail) {
            return  article.thumbnail.source;
        }
        return require('./images/wiki.svg')
    }

    _refresh() {
        this.setState(App.getInitState());
    }

    setActiveModal(activeModal) {
        activeModal = activeModal || null;
        let modalHistory = this.state.modalHistory ? [...this.state.modalHistory] : [];

        if (activeModal === null) {
            modalHistory = [];
        } else if (modalHistory.indexOf(activeModal) !== -1) {
            modalHistory = modalHistory.splice(0, modalHistory.indexOf(activeModal) + 1);
        } else {
            modalHistory.push(activeModal);
        }

        this.setState({
            activeModal,
            modalHistory
        });
    }


    selectProfilePhoto() {
        this.setState({showSpinner: true});
        bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        bridge.send("VKWebAppGetAuthToken", {"app_id": 7481050, "scope": "photos"}).then(data => {
            this.setState({access_token: data.access_token, error: null});
            const access_token =  data.access_token;
            bridge.send("VKWebAppCallAPIMethod",
                {"method": "photos.get", "request_id": "32test", "params": {"rev": 1, "v":"5.107", "album_id":"profile", "access_token": access_token}}
            ).then(res => {
                this.setState({profilePhotos: res.response.items, showSpinner: false}, () => {
                    this.setActiveModal(MODAL_PROFILE_PHOTOS);
                });
            });
        }).catch(error => this.setState({error: "Приложению требуется разрешение на доступ к фотографиям", showSpinner: false}));
    }

    selectWallPhoto() {
        this.setState({showSpinner: true});
        bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        bridge.send("VKWebAppGetAuthToken", {"app_id": 7481050, "scope": "photos"}).then(data => {
            this.setState({access_token: data.access_token, status: "request", error: null});
            const access_token =  data.access_token;
            bridge.send("VKWebAppCallAPIMethod",
                {"method": "photos.get", "request_id": "32test", "params": {"rev": 1, "v":"5.107", "album_id":"wall", "access_token": access_token}}
            ).then(res => {
                this.setState({status: res, profilePhotos: res.response.items, showSpinner: false}, () => {
                    this.setActiveModal(MODAL_PROFILE_PHOTOS);
                });
            }).catch(error => {
                this.setState({status: error})
            });
        }).catch(error => this.setState({error: "Приложению требуется разрешение на доступ к фотографиям", showSpinner: false}));
    }

    selectAlbumPhoto() {
        this.setState({showSpinner: true});
        bridge.subscribe((e) => console.log(e));
        bridge.send("VKWebAppInit", {});
        bridge.send("VKWebAppGetAuthToken", {"app_id": 7481050, "scope": "photos"}).then(data => {
            this.setState({access_token: data.access_token, status: "request", error: null});
            const access_token =  data.access_token;
            bridge.send("VKWebAppCallAPIMethod",
                {"method": "photos.getAlbums", "params": {"v":"5.107", "need_covers":1, "access_token": access_token}}
            ).then(res => {
                this.setState({status: res, albums: res.response.items, showSpinner: false}, () => {
                    this.setActiveModal(MODAL_ALBUMS);
                });
            }).catch(error => {
                this.setState({status: error})
            });
        }).catch(error => this.setState({error: "Приложению требуется разрешение на доступ к фотографиям", showSpinner: false}));
    }


    selectPhoto(url) {
        this.setState({status: url});
        this.setActiveModal(null);
        this.setState({
            showSpinner: true, pagesWithMatchingImages: [], webEntities: [],
            visuallySimilarImages: [], slideIndex: 0, landmarks: [], displayResultsMode: false, preview: null,
        });
        const _this = this;
        let req = request.post('https://ocr.kurumbus.com/api/web-url')
            .send({ "file_url":  url});
        req.then(res => {
            _this.setState({
                pagesWithMatchingImages: res.body.pages_with_matching_images ?? [],
                webEntities: res.body.web_entities ?? [],
                landmarks: res.body.landmarks ?? [],
                visuallySimilarImages: res.body.visually_similar_images ?? [],
                showSpinner: false, displayResultsMode: true, preview: res.body.file_url
            });
        });
    }

    setActiveAlbum(album) {
        this.setState({showSpinner: true});
        bridge.send("VKWebAppCallAPIMethod",
            {"method": "photos.get", "params": {"rev": 1, "v":"5.107", "album_id":album.id, "access_token": this.state.access_token}}
        ).then(res => {
            this.setState({profilePhotos: res.response.items, status: res, showSpinner: false}, () => {
                this.setActiveModal(MODAL_PROFILE_PHOTOS);
            });
        }).catch(error => this.setState({status: error}));
    }
}

export default App;
