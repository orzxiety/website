<script>
    export default {
        data() {
            return {
                serverInfo: {"m.server": "matrix.orzxiety.ru"}
            }
        }
    }
</script>

<template>
    <div>
        <pre>{{ serverInfo }}</pre>
    </div>
</template>