<template>
    <div class="library">
        <!-- <div class="columns">
            <div class="navbar column">
                <div class="title">Deviant</div>
                <div class="actions"></div>
            </div>            
        </div> -->
        <div class="columns">
            <div class="search column is-one-quarter">
                <div class="search-input">
                    <input type="text" placeholder="Find Code Snippet..." />
                </div>
                <div class="result">
                    <div class="title">Reload User Results</div>
                    <div class="description">Fetch the most recent user results and then update the view.</div>
                    <div class="tags">
                        <div class="tag">javascript</div>
                        <div class="tag">user results</div>
                        <div class="tag">deviant</div>
                    </div>
                </div>
                <div class="result active">
                    <div class="title">Total sum of property in object array</div>
                    <div class="description">Get the total sum of a property in an array of objects.</div>
                    <div class="tags">
                        <div class="tag">javascript</div>
                        <div class="tag">arrays</div>
                    </div>
                </div>
                <div class="result">
                    <div class="title">Emit an evant on the global scope</div>
                    <div class="description">Use of the global scope to both emit and receive global events.</div>
                    <div class="tags">
                        <div class="tag">javascript</div>
                        <div class="tag">angular</div>
                        <div class="tag">events</div>
                    </div>
                </div>
                <div class="result">
                    <div class="title">Default unit test template</div>
                    <div class="description">A starter template for a new karma unit test.</div>
                    <div class="tags">
                        <div class="tag">javascript</div>
                        <div class="tag">karma</div>
                        <div class="tag">unit tests</div>
                    </div>
                </div>
            </div>
            <div class="editor column is-three-quarters">
                <editor v-model="content" @init="editorInit" aria-setsize="16" lang="javascript" theme="twilight" width="100%" height="100%"></editor>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        content:
       `
        // example set of data 
        let studentResults = [
            {
                name: 'Student 1',
                score: 8
            },
                {
                name: 'Student 2',
                score: 3
            },
                {
                name: 'Student 3',
                score: 7
            },
                {
                name: 'Student 4',
                score: 10
            },
                {
                name: 'Student 5',
                score: 5
            }   
        ];

        // get sum using reduce, starting with 0
        studentResults.reduce((a, b) => {
            return a + b.score
        }, 0);

        // using a generic helper function
        Array.prototype.sum = function(prop) {
        return this.reduce(function(a, b) {
                return a + b[prop];
            }, 0);
        };

        // get sum using the extension method on the Array Prototype
        studentResults.sum('score');
        `
    }),
        components: {
        editor: require('vue2-ace-editor'),
    },
        methods: {
        editorInit: function () {
            require('brace/ext/language_tools') //language extension prerequsite...
            require('brace/mode/html')                
            require('brace/mode/javascript')    //language
            require('brace/mode/less')
            require('brace/theme/twilight')
            require('brace/snippets/javascript') //snippet
        }
    }
}
</script>
<style scoped lang="scss">
    .search-input {
        padding-top: 20px;
    }
    
    .search-input input {
        display: block;
        color: white;
        margin: 0 0 20px;
        padding: 20px 12px 20px 12px;
        border: 1px solid rgba(0, 0, 0, 0.5);
        background: rgb(41, 41, 41);
        width: 100%;
        color: #aaa;
        font-size: 18px;
        outline: none !important;
    }

    input::focus-inner {
  border: 0;
  padding: 0;
}
    .library {
        background-color: rgb(20, 20, 20);
        padding-left: 20px;
    }

    .result:hover {
        background-color: rgb(41, 41, 41);
    }

    .result {
        padding: 20px 10px;
        cursor: pointer;
    }

    .result.active {
        background-color: rgb(41, 41, 41);
    }

    .result .title {
        font-size: 16px;
        font-weight: bold;
        color: white;
        margin-left: 20px;
        margin-bottom: 5px;
    }

    .result .tags {
        margin-left: 20px;
        margin-top: 10px;
    }

    .result .description {
        font-size: 12px;
        color: white;
        margin-left: 20px;
    }

    .editor {
        margin-top: 20px;
    }
</style>
