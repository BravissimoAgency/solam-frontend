<template>
    <div class="bottom flex">
        <div class="left">
            SOLAM is a part of the
            <a
                href="http://lyckeby.com/en"
                target="_blank"
            >
                Lyckeby Group
            </a>
        </div>
        <div class="right">
            Website produced by
            <a
                href="https://www.bravissimo.se/"
                target="_blank"
            >
                Bravissimo
            </a>
        </div>

    </div>
</template>

<style lang="postcss" scoped>
.bottom {
    padding: 23px 100px;
    background-color: #e4eaec;
    color: #8a969c;
    font-size: 13px;
    @media (--smallDesktop) {
        padding: 20px 50px;
    }
    @media (--laptop) {
        padding: 15px 30px;
    }
    @media (--tablet) {
        justify-content: center;
    }
    @media (--mobile) {
        flex-wrap: wrap;
        line-height: 1.6;
        text-align: center;
    }
    & a:hover {
        color: var(--primaryColor);
    }
}
.left {
    border-right: 1px solid #8A969D;
    margin-right: 15px;
    padding-right: 15px;
    @media (--mobile) {
        width: 100%;
        border-right: 0;
        margin-right: 0;
        padding-right: 0;
        margin-bottom: 2px;
    }
}
.right {
    @media (--mobile) {
        width: 100%;
    }
}
</style>
