<header class="page-header">
	<h1 class="page-title">
		<?php
		if ( is_category() ) :
			single_cat_title();

			elseif ( is_tag() ) :
				single_tag_title();

			elseif ( is_author() ) :
				/* translators: %s: author name */
				printf( esc_html__( 'Author: %s', 'activello' ), '<span class="vcard">' . get_the_author() . '</span>' );

			elseif ( is_day() ) :
				/* translators: %s: day */
				printf( esc_html__( 'Day: %s', 'activello' ), '<span>' . get_the_date() . '</span>' );

			elseif ( is_month() ) :
				/* translators: %s: month */
				printf( esc_html__( 'Month: %s', 'activello' ), '<span>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'activello' ) ) . '</span>' );

			elseif ( is_year() ) :
				/* translators: %s: year */
				printf( esc_html__( 'Year: %s', 'activello' ), '<span>' . get_the_date( _x( 'Y', 'yearly archives date format', 'activello' ) ) . '</span>' );

			elseif ( is_tax( 'post_format', 'post-format-aside' ) ) :
				esc_html_e( 'Asides', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) :
				esc_html_e( 'Galleries', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-image' ) ) :
				esc_html_e( 'Images', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-video' ) ) :
				esc_html_e( 'Videos', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-quote' ) ) :
				esc_html_e( 'Quotes', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-link' ) ) :
				esc_html_e( 'Links', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-status' ) ) :
				esc_html_e( 'Statuses', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-audio' ) ) :
				esc_html_e( 'Audios', 'activello' );

			elseif ( is_tax( 'post_format', 'post-format-chat' ) ) :
				esc_html_e( 'Chats', 'activello' );

			else :
				esc_html_e( 'Archives', 'activello' );

			endif;
		?>
	</h1>
	<?php
		// Show an optional term description.
		$term_description = term_description();
	if ( ! empty( $term_description ) ) :
		printf( '<div class="taxonomy-description">%s</div>', $term_description );
		endif;
	?>
</header><!-- .page-header -->

<div class="posts">
  <?php while ( have_posts() ) : the_post(); ?>
    <?php get_template_part('src/components/post/post', get_post_format()); ?>
  <?php endwhile; ?>
</div>

<?php activello_paging_nav(); ?>
