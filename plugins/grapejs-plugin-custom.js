//componente de áudio -- André 29/04/2021
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
  grapesjs.plugins.add(
    "grapejs-media-audio-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('audio', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-sound-o" style="font-size: 48px"></i></div>'
                },
            },
        })

        bm.add('audio', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-sound-o" style="font-size: 46px"></i> <div style="margin-top: 20px;">Áudio</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'audio',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-audio',
                },
            },
            selectable: true
        });

        dom.addType('audio', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'audio',
                        icon: '<i class="fa fa-file-sound-o"></i>',
                        attributes: {
                            name: "audio",
                            src: "",
                            controls: "true",
                        },
                        style: {
                            height: '70px',
                            margin: '10px'
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'audio') {
                            return { type: 'audio' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'audio',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openAudioAssets(editor, am, target);
                },
            }),
        });

        function openAudioAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para áudio:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'audio'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo de áudio');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo de áudio ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['audio'],
                accept: 'audio/*',
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();
                    attrs.src = t.attributes.src;

                    target.setAttributes(attrs);
                },
            });
        }
    }
);
//componente de áudio
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//componente PDF
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
grapesjs.plugins.add(
    "grapejs-media-pdf-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('pdf', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js            
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-pdf-o" style="font-size: 48px"></i></div>'
                },
            }
        })

        bm.add('pdf', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-pdf-o" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">PDF</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'pdf',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-pdf'
                },
            },
            selectable: true
        });

        dom.addType('pdf', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'iframe',
                        icon: '<i class="fa fa-file-pdf-o"></i>',
                        attributes: {
                            name: "pdf",
                            src: "",
                            resizable: true,
                        },
                        style: {
                            width: '98%',
                            height: '1024px',
                            // margin-top: '10px',
                            // margin-bottom: '10px',
                            margin: '10px'
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'iframe') {
                            return { type: 'pdf' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'iframe',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openPDFAssets(editor, am, target);
                },
            }),

        });

        function openPDFAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para pdf:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'pdf'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo PDF');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo PDF ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['application/pdf'],
                accept: 'pdf',
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();

                    attrs.src = '/api/oth/index.html?file=' + t.attributes.src;
                    // attrs.src =  t.attributes.src;
                    target.setAttributes(attrs);
                },
            });
        }


    }
);

//componente PDF
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


//componente EXCEL
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-excel-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('excel', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js               
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-excel-o" style="font-size: 48px"></i></div>'
                },
            }
        })

         bm.add('excel', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-excel-o" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Excel</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'excel',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-excel'
                },
            },
            selectable: true
        });

        dom.addType('excel', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'iframe',
                        icon: '<i class="fa fa-file-excel-o"></i>',
                        attributes: {
                            name: "excel",
                            src: "",
                            resizable: true,
                        },
                        style: {
                            width: '98%',
                            height: '1024px',
                            // margin-top: '10px',
                            // margin-bottom: '10px',
                            margin: '10px'
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'iframe') {
                            return { type: 'excel' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'iframe',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openExcelAssets(editor, am, target);
                },
            }),

        });

        function openExcelAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para excel:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'excel'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo excel');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo excel ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['xlsx', 'xls'],
                accept: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel'],
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();

                    attrs.src = '/api/oth/index.html?file=' + t.attributes.src;
                    // attrs.src =  t.attributes.src;
                    target.setAttributes(attrs);
                },
            });
        }


    }
);

//componente EXCEL
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


//componente WORD
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-word-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('word', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js               
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-word-o" style="font-size: 48px"></i></div>'
                },
            },
        })

        bm.add('word', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-word-o" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Word</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'word',
                activeOnRender: true,
                attributes: {
                    class: ''
                },
            },
            selectable: true
        });

        dom.addType('word', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'iframe',
                        icon: '<i class="fa fa-file-word-o"></i>',
                        attributes: {
                            name: "word",
                            src: "",
                            resizable: true,
                        },
                        style: {
                            width: '100%',
                            height: '1024px',
                            margin: '10px',
                            'min-height':'590px'
                            
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ],
            
           
            
            
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'iframe') {
                            return { type: 'word' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'iframe',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openWordAssets(editor, am, target);
                },
            }),
        });

        editor.on('component:selected', target => {
            if (target && target.getName() === 'Word') {
                openWordAssets(editor, am, target);
            }
        });

        function openWordAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para word:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'word'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo word');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo word ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['doc', 'docx'],
                accept: ['application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();
                    attrs.src = '/api/oth/index.html?file=' + t.attributes.src;
                    // attrs.src =  t.attributes.src;
                    attrs.style = "background : #fff;width : 100%;height : 1024px";
console.log(attrs.style)
                    target.setAttributes(attrs);
                 },
            });
        }


    }
);

//componente WORD
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//componente PPT
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-ppt-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('ppt', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-powerpoint-o" style="font-size: 48px"></i></div>'
                },
            },
        })

        bm.add('ppt', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-powerpoint-o" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Power Point</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'ppt',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-ppt'
                },
            },
            selectable: true
        });

        dom.addType('ppt', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'iframe',
                        icon: '<i class="fa fa-file-powerpoint-o"></i>',
                        attributes: {
                            name: "ppt",
                            src: "",
                            resizable: true,
                        },
                        style: {
                            width: '98%',
                            height: '1024px',
                            // margin-top: '10px',
                            // margin-bottom: '10px',
                            margin: '10px'
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'iframe') {
                            return { type: 'ppt' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'iframe',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openPPTAssets(editor, am, target);
                },
            }),
        });

        editor.on('component:selected', target => {
            if (target && target.getName() === 'Ppt') {
                openPPTAssets(editor, am, target);
            }
        });

        function openPPTAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para ppt:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'ppt'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo ppt');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo ppt ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['ppt', 'pptx'],
                accept: ['application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation'],
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();

                    attrs.src = '/api/oth/index.html?file=' + t.attributes.src;
                    // attrs.src =  t.attributes.src;
                    target.setAttributes(attrs);
                },
            });
        }


    }
);

//componente PPT
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//componente FILES
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------
grapesjs.plugins.add(
    "grapejs-media-files-plugin",
    (editor, options) => {
 
        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        const allowedTypes = ["zip", "rar", "xls", "xlsx", "ppt", "pptx", "doc", "docx", "pdf", "txt", "mp4", "audio", "wmv", ".jpg", "gif", "png", "psd"];
        const allowedMimeTypes = [
            "application/zip, application/octet-stream, application/x-zip-compressed, multipart/x-zip",
            "application/x-rar-compressed, application/octet-stream",
            "application/vnd.ms-excel",
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "application/vnd.ms-powerpoint",
            "application/vnd.openxmlformats-officedocument.presentationml.presentation",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
            "application/pdf",
            "text/*",
            "video/mp4",
            "audio/*",
            "video/x-ms-wmv",
            "image/jpeg",
            "image/gif",
            "image/png",
            "image/vnd.adobe.photoshop",
            "application/x-photoshop",
            "application/photoshop",
            "application/psd",
            "image/psd"
        ];

        am.addType('files', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js            
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-download" style="font-size: 48px"></i></div>'
                },
            }
        })

        bm.add('file', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-download" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Arquivo</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'file',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-file'
                },
            },
            selectable: true
        });

        dom.addType('file', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: false,
                        tagName: 'div',
                        icon: '<i class="fa fa-download"></i>',
                        attributes: {
                            name: "file",
                            class: "container-fluid"
                        },
                        style: {
                            margin: '10px',
                            padding: '35px',
                            border: '1px solid #000',
                            height: '140px'
                        },
                        components: [`
                                <span class='file-icon' style="float:left;">
                                    <i class="fa fa-download mt-1" style="font-size: 5.8rem;"></i>
                                </span>
                                <ul class='list-unstyled' style="margin-left: 90px;">
                                    <li><label class="text-secondary">Nome do arquivo:<span class='file-name'>Não Informado</span></label></li>
                                    <li><label class="text-secondary">Tamanho do arquivo: <span class='file-size'>Não Informado</span></label></li>                                                              
                                </ul>
                            `, {
                            tagName: 'a',
                            attributes: {
                                class: 'ml-2 btn btn-sm btn-secondary file-download-btn',
                                style: 'margin-top: -8px',
                            },
                            content: 'Baixar arquivo',
                            addEventListener(e) {
                                console.log("event listener");
                            }
                        }],

                        // <li class="mt-2"><a href='#' class='btn btn-sm btn-secondary file-download-btn'>Baixar Arquivo</a></li>  

                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'div') {
 
                            return { type: 'file' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'div',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openFileAssets(editor, am, target);
                },
            }),

        });




        function openFileAssets(editor, am, target) {
            // am.render(am.getAll().filter(
            //     asset => asset.get('type') == 'file'
            // ));          

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');
                modal.setTitle('Selecione um arquivo');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: [allowedTypes],
                accept: [allowedMimeTypes],
                target: target,
                onSelect: function onSelect(t) {

                    const fileName = target.find("span.file-name")[0];
                    const fileSize = target.find("span.file-size")[0];

                    var name = t.attributes.src.split("/").pop();
                    var size = bytesToSize(t.attributes.size);

                    fileName.components(" " + name);
                    fileSize.components(size);
                   
                    const downloadBtn = target.find('a.file-download-btn')[0];
                    downloadBtn.addAttributes({
                        'href': t.attributes.src,
                        'download': name,
                        'target': '_blank',
                    });

                },
            });
        }

        editor.on('block:drag:stop', target => {
            if (target && target.getName() === 'File') {
                target.find('a.file-download-btn')[0].views[0].el.addEventListener("click", forceDownload);
 
            }
        });

         function forceDownload(e) {
            var href = e.target.href;
            var fileName = e.target.download;

            if (!href) {
                return false;
            }

            var anchor = document.createElement('a');

            anchor.href = href;
            anchor.download = fileName;
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
        }

    //function bytes
    function bytesToSize(bytes) {
         var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
         if (bytes == 0) return '0 Byte';
         var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
console.log('dfasf')
        return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
    }

    }
);

//componente FILES
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


// componente tabs 
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

 /*
grapesjs.plugins.add(
    "grapejs-media-tabs-plugin",
    (editor, options) => {
console.log(editor)
        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;
     
am.addType('tabs', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js            
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-pdf-o" style="font-size: 48px"></i></div>'
                },
            }
        })

        bm.add('tabs', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-pdf-o" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">TABS</div></div>',
            activate: true,
            category: 'Básicos',
            content: {
                type: 'tabs',
                activeOnRender: true,
                attributes: {
                    class: 'gjs-tabs'
                },
            },
            selectable: true
        }); 

            dom.addType('tabs', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'iframe',
                        icon: '<i class="fa fa-file-pdf-o"></i>', 
                        style: {
                            width: '98%',
                            height: '1024px',
                            // margin-top: '10px',
                            // margin-bottom: '10px',
                            margin: '10px'
                        },
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                 ), 

        });


        function openTABSssets(editor, am, target) {
           
        }


    }
);
  
*/

// componente tabs 
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

//componente VIDEO (UPLOAD)
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-video-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('video', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-file-video-o" style="font-size: 48px"></i></div>'
                },
            },
        })

        bm.add('video_', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-file-video-o" style="font-size: 46px"></i> <div style="margin-top: 20px;">Vídeo</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'video',
                activeOnRender: true,
                attributes: {
                    class: '',
                },
                style: {
                    margin: '10px auto',
                    position: 'relative',
                    display: 'block',
                    width: '800px',
                    height: '400px',
                    'max-width': '100%',
                    'max-height': '100%',
                    padding: '0',
                    overflow: 'hidden',
                },
            },
            selectable: true
        });

        dom.addType('video', {
            model: defaultModel.extend({
                    defaults: Object.assign({}, defaultModel.prototype.defaults, {
                        removable: true,
                        draggable: true,
                        droppable: false,
                        badgable: true,
                        stylable: true,
                        highlightable: true,
                        copyable: true,
                        resizable: true,
                        editable: true,
                        tagName: 'video',
                        icon: '<i class="fa fa-file-video-o"></i>',
                        attributes: {
                            name: "video",
                            src: "",
                            controls: "true",
                        },
 
                        traits: [
                            defaultModel.prototype.defaults.traits,
                        ]
                    })
                },

                {
                    isComponent: function(el) {
                        if (el.tagName === 'video') {
                            return { type: 'video' };
                        }
                    }
                }),

            view: defaultType.view.extend({
                tagName: 'video',
                init() {
                    this.listenTo(this.model, 'active', this.onActive);
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openVideoAssets(editor, am, target);
                },
            }),
        });

        function openVideoAssets(editor, am, target) {
            //renderiza o AssetManager com o filtro somente para áudio:
            am.render(am.getAll().filter(
                asset => asset.get('type') == 'video'
            ));

            const modal = editor.Modal;
            modal.getModel().once('change:open', () => {

                const modal = editor.Modal;
                const modalBody = modal.getContentEl();
                const header = modalBody.querySelector('.gjs-am-assets-header');
                const uploadTitle = modalBody.querySelector('#gjs-am-title');

                modal.setTitle('Selecione um arquivo de vídeo');

                if (header != null) {
                    header.style.display = "none";
                }

                if (uploadTitle != null) {
                    uploadTitle.innerText = "Arraste um arquivo de vídeo ou clique para selecionar";
                }

            });
            editor.runCommand("open-assets", {
                types: ['video'],
                accept: 'video/*',
                target: target,
                onSelect: function onSelect(t) {
                    var attrs = target.getAttributes();
                    attrs.src = t.attributes.src;

                    target.setAttributes(attrs);
                },
            });
        }
    }
);

//componente VIDEO
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------


//componente VIDEO (YOUTUBE)
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-youtube-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('youtube_', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js            
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-youtube-play" style="font-size: 48px"></i></div>'
                },
            }
        })

        bm.add('youtube', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-youtube-play" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Youtube</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'youtube',
                activeOnRender: true,
                attributes: {
                    class: ''
                },
                style: {
                    margin: '10px auto',
                    position: 'relative',
                    display: 'block',
                    width: '800px',
                    height: '400px',
                    'max-width': '100%',
                    'max-height': '100%',
                    padding: '0',
                    overflow: 'hidden',
                },
            },
            selectable: true,
            draggable: true,
            highlightable: true,
            resizable: true,
        });

        dom.addType('youtube', {
            isComponent: el => el.tagName == 'YOUTUBE',
            model: {
                defaults: {
                    removable: true,
                    draggable: true,
                    droppable: false,
                    badgable: true,
                    stylable: true,
                    highlightable: false,
                    copyable: true,
                    resizable: true,
                    editable: true,
                    tagName: 'youtube',
                    icon: '<i class="fa fa-youtube-play"></i>',
                    traits: [
                        // Strings are automatically converted to text types
                        'src',
                        // {
                        //     type: 'select', // Type of the trait
                        //     label: 'Type', // The label you will see in Settings
                        //     name: 'type', // The name of the attribute/property to use on component
                        //     options: [
                        //         { id: 'text', name: 'Text' },
                        //         { id: 'email', name: 'Email' },
                        //         { id: 'password', name: 'Password' },
                        //         { id: 'number', name: 'Number' },
                        //     ]
                        // }, {
                        //     type: 'checkbox',
                        //     name: 'required',
                        // }
                    ],
                    // As by default, traits are binded to attributes, so to define
                    // their initial value we can use attributes
                    // attributes: { type: 'text', required: true },
                    attributes: {
                        name: "youtubeWrapper",
                    },
                    components: [{
                        tagName: 'iframe',
                        attributes: {
                            src: "https://www.youtube.com/embed/",
                            class: "",
                            allowfullscreen: true,
                            name: 'youtubeIframe',
                            frameborder: 0,
                            style: "top: 3px; left: 3px; right: 3px; bottom: 3px; width: 98.5%; height: 98.5%; margin: 0 auto; position: absolute; border: 0;",
                        },
                        draggable: false,
                        highlightable: false,
                        copyable: false,
                        editable: false,
                        badgable: false,
                        droppable: false,
                    }],
                },
            },

            view: {
                init() {
                    this.listenTo(this.model, 'active', this.onActive)
                    this.listenTo(this.model, 'change:attributes:src', this.getEmbedUrl)
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openTraitManager(editor, target);
                },
                getEmbedUrl() {
                    const defaultUrl = "https://www.youtube.com/embed/";
                    var inputUrl = this.model.getAttributes().src;
                    const model = this.model;
                    const iframeModel = model.attributes.components.models[0];

                    var setEmbedUrl = function(url) {
                        iframeModel.addAttributes({ 'src': url });
                        model.addAttributes({ 'src': url });
                    }

                    if (inputUrl.search("embed") != '-1') {
                        inputUrl = inputUrl.replace("embed/", "watch?v=");
                    }

                    if (sessionStorage.getItem('getYoutubeEmbedUrl') == 1) {
                        sessionStorage.setItem('getYoutubeEmbedUrl', '0');
                    } else {
                        getYoutubeEmbedUrl(inputUrl).then(
                            function(value) {
                                sessionStorage.setItem('getYoutubeEmbedUrl', '1');
                                setEmbedUrl(value);
                            },
                            function(error) {
                                sessionStorage.setItem('getYoutubeEmbedUrl', '1');
                                setEmbedUrl(error);
                            }
                        );
                    }

                },
            }
        });

        editor.on('component:selected', target => {
            if (target && target.getName() === 'Youtube') {
                openTraitManager(editor, am, target);
            }
        });

        function openTraitManager(editor, target) {
            editor.select(target);
            $(".fa-cog").click();

            // editor.runCommand("open-tm");
        }

        function getYoutubeEmbedUrl(url) {
            var getUrl = window.location;
            var origin = getUrl.protocol + "//" + getUrl.host;
            // console.log(origin);

            return new Promise(function(myResolve, myReject) {
                let req = new XMLHttpRequest();
                req.open('GET', "https://www.youtube.com/oembed?url=" + url);
                req.onload = function() {
                    // console.log(req.status);
                    if (req.status == 200) {
                        let response = JSON.parse(req.response);
                        myResolve($(response.html).attr("src") + "&rel=0&loop=1&origin=" + origin);
                    } else {
                        myReject("https://www.youtube.com/embed/");
                    }
                };
                req.send();
            });
        }

    });

//componente VIDEO (YOUTUBE)
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------



//componente VIDEO (VIMEO)
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------

grapesjs.plugins.add(
    "grapejs-media-vimeo-plugin",
    (editor, options) => {

        const am = editor.AssetManager;
        const bm = editor.BlockManager;
        const dom = editor.DomComponents;
        const defaultType = dom.getType('default');
        const defaultModel = defaultType.model;

        am.addType('vimeo_', {
            view: {
                // `getPreview()` and `getInfo()` are just few helpers, you can
                // override the entire template with `template()`
                // Check the base `template()` here:
                // https://github.com/artf/grapesjs/blob/dev/src/asset_manager/view/AssetView.js            
                getPreview() {
                    return '<div style="display: flex; justify-content:center; align-content: center; flex-wrap: wrap; position: absolute; top: 0; left:0; right: 0; bottom: 0">' +
                        '<i class="fa fa-vimeo" style="font-size: 48px"></i></div>'
                },
            }
        })

        bm.add('vimeo', {
            label: '<div style="margin-top: 10px;"><i class="fa fa-vimeo" style="font-size: 46px"></i></div> <div style="margin-top: 20px;">Vimeo</div></div>',
            activate: true,
            category: 'Mídia',
            content: {
                type: 'vimeo',
                activeOnRender: true,
                attributes: {
                    class: ''
                },
                style: {
                    margin: '10px auto',
                    position: 'relative',
                    display: 'block',
                    width: '80%',
                    height: '400px',
                    'max-width': '100%',
                    'max-height': '100%',
                    padding: '0',
                    overflow: 'hidden',
                },
            },
            selectable: true,
            draggable: true,
            highlightable: true,
            resizable: true,
        });

        dom.addType('vimeo', {
            isComponent: el => el.tagName == 'VIMEO',
            model: {
                defaults: {
                    removable: true,
                    draggable: true,
                    droppable: false,
                    badgable: true,
                    stylable: true,
                    highlightable: true,
                    copyable: true,
                    resizable: true,
                    editable: true,
                    tagName: 'vimeo',
                    icon: '<i class="fa fa-vimeo"></i>',
                    traits: [
                        // Strings are automatically converted to text types
                        'src',
                        // {
                        //     type: 'select', // Type of the trait
                        //     label: 'Type', // The label you will see in Settings
                        //     name: 'type', // The name of the attribute/property to use on component
                        //     options: [
                        //         { id: 'text', name: 'Text' },
                        //         { id: 'email', name: 'Email' },
                        //         { id: 'password', name: 'Password' },
                        //         { id: 'number', name: 'Number' },
                        //     ]
                        // }, {
                        //     type: 'checkbox',
                        //     name: 'required',
                        // }
                    ],
                    // As by default, traits are binded to attributes, so to define
                    // their initial value we can use attributes
                    // attributes: { type: 'text', required: true },
                    attributes: {
                        name: "vimeoWrapper",
                    },
                    components: [{
                        tagName: 'iframe',
                        attributes: {
                            src: "https://player.vimeo.com/video",
                            class: "",
                            allowfullscreen: true,
                            name: 'vimeoIframe',
                            frameborder: 0,
                            style: "top: 3px; left: 3px; right: 3px; bottom: 3px; width: 98.5%; height: 98.5%; margin: 0 auto; position: absolute; border: 0;",
                        },
                        draggable: false,
                        highlightable: false,
                        copyable: false,
                        editable: false,
                        badgable: false,
                        droppable: false,
                    }],
                },
            },

            view: {
                init() {
                    this.listenTo(this.model, 'active', this.onActive)
                    this.listenTo(this.model, 'change:attributes:src', this.getEmbedUrl)
                },
                events: {
                    dblclick: 'onActive'
                },
                onActive() {
                    target = this.model;
                    openTraitManager(editor, target);
                },
                getEmbedUrl() {
                    const defaultUrl = "https://player.vimeo.com/video";
                    const inputUrl = this.model.getAttributes().src;
                    const model = this.model;
                    const iframeModel = model.attributes.components.models[0];

                    var setEmbedUrl = function(url) {
                        iframeModel.addAttributes({ 'src': url });
                        model.addAttributes({ 'src': url });
                    }

                    if (sessionStorage.getItem('getVimeoEmbedUrl') == 1) {
                        sessionStorage.setItem('getVimeoEmbedUrl', '0');
                    } else {
                        getVimeoEmbedUrl(inputUrl).then(
                            function(value) {
                                sessionStorage.setItem('getVimeoEmbedUrl', '1');
                                setEmbedUrl(value);
                            },
                            function(error) {
                                sessionStorage.setItem('getVimeoEmbedUrl', '1');
                                setEmbedUrl(error);
                            }
                        );
                    }

                },
            }
        });

        editor.on('component:selected', target => {
            if (target && target.getName() === 'Vimeo') {
                openTraitManager(editor, am, target);
            }
        });

        function openTraitManager(editor, target) {
            editor.select(target);
            $(".fa-cog").click();

            // editor.runCommand("open-tm");
        }

        function getVimeoEmbedUrl(url) {
            var getUrl = window.location;
            var origin = getUrl.protocol + "//" + getUrl.host;
            // console.log(origin);

            return new Promise(function(myResolve, myReject) {
                let req = new XMLHttpRequest();
                req.open('GET', "https://vimeo.com/api/oembed.json?url=" + url);
                req.onload = function() {
                    // console.log(req.status);
                    if (req.status == 200) {
                        let response = JSON.parse(req.response);
                        myResolve($(response.html).attr("src"));
                    } else {
                        myReject("https://player.vimeo.com/video");
                    }
                };
                req.send();
            });
        }

    });

//componente VIDEO (VIMEO)
//--------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------




///teste



//teste