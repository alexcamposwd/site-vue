<template>
    <footer>
        <div class="socialLink">
            <a href="https://www.facebook.com/cpcrconstrucoes" target="_blank"><img src="https://i.imgur.com/FP6fDra.png" alt="facebook"></a>
            <a href="https://www.instagram.com/cpcr_construcoes/" target="_blank"><img src="https://i.imgur.com/LUdeKvQ.png" alt="instagram"></a>
            <a href="https://www.youtube.com/channel/UCCNpz1j5fPH4TZg4Mo4OxDA" target="_blank"><img src="https://i.imgur.com/380M42K.png" alt="youtube"></a>
        </div>
        <div class="copyright">
            <p>&copy; CPCR - CONSTRUÇÕES</p>
        </div>

    </footer>
</template>

<script>

export default {
    name: 'Footer',
   
}
</script>

<style scoped>
    footer {
        width: 100%;
        height: 50px;
        background-color: var(--color-01);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .socialLink {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70%;
    }

    .socialLink img{
        width: 25px;
        filter: invert(25%) sepia(11%) saturate(5256%) hue-rotate(112deg) brightness(90%) contrast(94%);
        margin-left: 30px;
    }

    div.socialLink a:nth-child(1) img {
        height: 28px;
    }

    div.socialLink a:nth-child(3) img {
        margin-left: 34px;
    }

    .copyright {
        display: flex;
        color: var(--color-green);
        width: 30%;
        font-size: 12px;
        font-weight: bold;
        justify-content: flex-end;
        margin-right: 30px;
    }

    @media(max-width: 700px) {
        .socialLink img{
            width: 20px;
            margin-left: 20px;
        }

        div.socialLink a:nth-child(1) img {
            height: 20px;
        }
        
        div.socialLink a:nth-child(3) img {
            margin-left: 26px;
        }
        
        .socialLink {
            width: 55%;
        }
        
        .copyright {
            font-size: 12px;
            width: 45%;
        }
    }
</style>