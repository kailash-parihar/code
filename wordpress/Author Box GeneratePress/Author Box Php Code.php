<div class="coadingNotes-author-box">
    <div class="author-avatar">
        <?php echo get_avatar( get_the_author_meta( 'ID' ), 250 ); ?>
    </div>
    <div class="author-info">
        <div class="author-title" itemprop="author" itemscope itemtype="http://schema.org/Person">
            <span itemprop="name">
                <?php printf( get_the_author_meta( 'display_name') );?>
            </span>
        </div>
        <div class="author-summary">
            <p class="author-description">
                <?php echo wp_kses( get_the_author_meta( 'description' ), null ); ?>
            </p>
        </div>
        <div class="author-links">
            <a href="https://coadingnotes.com/about-us/" title="Read More About this Author">...</a>
       </div>
    </div>
</div>